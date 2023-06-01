import React from "react";
import { Grid, TextField, Button, Alert } from "@mui/material";
import loginimg from "../assets/loginimg.webp";
import logingoogle from "../assets/logingoogle.png";
import Regiheadinglog from "../Components/Regiheadinglog";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import {
   getAuth,
   signInWithEmailAndPassword,
   GoogleAuthProvider,
   signInWithPopup,
} from "firebase/auth";

let intialValues = {
   email: "",
   password: "",
   loading: false,
   error: "",
};

const Login = () => {
   const provider = new GoogleAuthProvider();
   const auth = getAuth();
   let [values, setValues] = useState(intialValues);

   let handleValues = (e) => {
      setValues({
         ...values,
         [e.target.name]: e.target.value,
      });
   };

   let handleSubmit = () => {
      let { email, password } = values;
      if (!email) {
         setValues({
            ...values,
            error: "Enter an Email",
         });
         return;
      }

      if (!password) {
         setValues({
            ...values,
            error: "Enter an Password",
         });
         return;
      }
      setValues({
         ...values,
         loading: true,
      });

      signInWithEmailAndPassword(auth, email, password).then((user) => {
         console.log(user);
         setValues({
            ...values,
            email: "",
            password: "",
            loading: false,
         });
         console.log(user);
      });
   };

   let handleGoogle = () => {
      signInWithPopup(auth, provider).then((result) => {
         console.log(result);
      });
   };

   return (
      <Grid container spacing={2}>
         <Grid item xs={6}>
            <div className="regcontainer">
               <Regiheadinglog
                  className="headingreglog"
                  title="Login to your account!"
               />
               <picture>
                  <img
                     onClick={handleGoogle}
                     className="googlelogin"
                     src={logingoogle}
                  />
               </picture>
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
                     type="password"
                     value={values.password}
                     name="password"
                     id="outlined-basic"
                     label="Password"
                     variant="outlined"
                     placeholder="Enter Your Password"
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
                     Login to Continue
                  </Button>
               )}
            </div>
         </Grid>
         <Grid item xs={6}>
            <picture>
               <img className="regiimg" src={loginimg} />
            </picture>
         </Grid>
      </Grid>
   );
};

export default Login;
