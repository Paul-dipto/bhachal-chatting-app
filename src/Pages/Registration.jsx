import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import regiimg from "../assets/Registration-img.webp";
import Regiheadinglog from "../Components/Regiheadinglog";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

let intialValues = {
   email: "",
   fullname: "",
   password: "",
   loading: false,
};

const Registration = () => {
   const auth = getAuth();

   let navigate = useNavigate();

   let [values, setValues] = useState(intialValues);

   let handleValues = (e) => {
      setValues({
         ...values,
         [e.target.name]: e.target.value,
      });
   };

   let handleSubmit = () => {
      let { email, fullname, password } = values;
      setValues({
         ...values,
         loading: true,
      });
      createUserWithEmailAndPassword(auth, email, password).then((user) => {
         console.log(user);
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
               </div>
               <div className="reg-form">
                  <TextField
                     onChange={handleValues}
                     value={values.fullname}
                     name="fullname"
                     id="outlined-basic"
                     label="First-Name"
                     variant="outlined"
                  />
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
