import React, { useState } from "react";
import { Grid, TextField, Button, Alert } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import regiimg from "../assets/Registration-img.webp";
import Regiheadinglog from "../Components/Regiheadinglog";
import {
   getAuth,
   createUserWithEmailAndPassword,
   sendEmailVerification,
   updateProfile,
} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { getDatabase, ref, set, push } from "firebase/database";

let intialValues = {
   email: "",
   fullname: "",
   password: "",
   loading: false,
   error: "",
};

const Registration = () => {
   const auth = getAuth();
   const db = getDatabase();

   let navigate = useNavigate();

   let [values, setValues] = useState(intialValues);

   let handleValues = (e) => {
      setValues({
         ...values,
         [e.target.name]: e.target.value,
      });
   };

   let handleSubmit = () => {
      var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      let { email, fullname, password } = values;
      if (!email) {
         setValues({
            ...values,
            error: "Enter an Email",
         });
         return;
      }
      if (!fullname) {
         setValues({
            ...values,
            error: "Enter Full-Name",
         });
         return;
      }
      if (!password) {
         setValues({
            ...values,
            error: "Enter a password",
         });
         return;
      }

      setValues({
         ...values,
         loading: true,
      });

      createUserWithEmailAndPassword(auth, email, password).then((user) => {
         updateProfile(auth.currentUser, {
            displayName: values.fullname,
            photoURL: "https://i.ibb.co/W09gQtH/avatar.jpg",
         })
            .then(() => {
               sendEmailVerification(auth.currentUser).then(() => {
                  set(ref(db, "users/" + user.user.uid), {
                     username: values.fullname,
                     email: values.email,
                     profile_picture: user.user.photoURL,
                  });
               });
            })
            .catch((error) => {
               // An error occurred
               // ...
            });
         setValues({
            ...values,
            email: "",
            fullname: "",
            password: "",
            loading: false,
         });
         navigate("/login");
      });
   };
   return (
      <Grid container spacing={2}>
         <Grid item xs={6}>
            <div className="regcontainer">
               <Regiheadinglog
                  className="headingreglog"
                  title="Get started with easily register"
               />
               <p className="regpara">Free register and you can enjoy it</p>
               <div className="reg-form">
                  <TextField
                     onChange={handleValues}
                     type="email"
                     value={values.email}
                     name="email"
                     id="outlined-basic"
                     label="Email-Adress"
                     variant="outlined"
                  />
                  {values.error.includes("Email") && (
                     <Alert severity="error">{values.error}</Alert>
                  )}
               </div>
               <div className="reg-form">
                  <TextField
                     onChange={handleValues}
                     value={values.fullname}
                     type="text"
                     name="fullname"
                     id="outlined-basic"
                     label="First-Name"
                     variant="outlined"
                  />
                  {values.error.includes("Full-Name") && (
                     <Alert severity="error">{values.error}</Alert>
                  )}
               </div>
               <div className="reg-form">
                  <TextField
                     onChange={handleValues}
                     type="password"
                     value={values.password}
                     name="password"
                     id="outlined-basic"
                     label="Password"
                     variant="outlined"
                  />
                  {values.error.includes("password") && (
                     <Alert severity="error">{values.error}</Alert>
                  )}
               </div>
               {values.loading ? (
                  <LoadingButton loading variant="outlined">
                     Submit
                  </LoadingButton>
               ) : (
                  <Button onClick={handleSubmit} variant="contained">
                     Sign Up
                  </Button>
               )}
               <Alert severity="error" style={{ marginBottom: "20px" }}>
                  Forgot Password
                  <strong>
                     {" "}
                     <Link to="/ForgotPassword">Click Here</Link>
                  </strong>
               </Alert>
            </div>
         </Grid>
         <Grid item xs={6}>
            <picture>
               <img className="regiimg" src={regiimg} />
            </picture>
         </Grid>
      </Grid>
   );
};

export default Registration;
