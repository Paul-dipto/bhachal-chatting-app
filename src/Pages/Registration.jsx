import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import regiimg from "../assets/Registration-img.webp";
import Regiheadinglog from "../Components/Regiheadinglog";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

let intialValues = {
   email: "",
   fullname: "",
   password: "",
};

const Registration = () => {
   const auth = getAuth();

   let [values, setValues] = useState(intialValues);

   let handleValues = (e) => {
      setValues({
         ...values,
         [e.target.name]: e.target.value,
      });
   };

   let handleSubmit = () => {
      let { email, fullname, password } = values;
      createUserWithEmailAndPassword(auth, email, password).then((user) => {
         console.log(user);
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
                     name="email"
                     id="outlined-basic"
                     label="Email-Adress"
                     variant="outlined"
                  />
               </div>
               <div className="reg-form">
                  <TextField
                     onChange={handleValues}
                     name="fullname"
                     id="outlined-basic"
                     label="First-Name"
                     variant="outlined"
                  />
               </div>
               <div className="reg-form">
                  <TextField
                     onChange={handleValues}
                     name="password"
                     id="outlined-basic"
                     label="Password"
                     variant="outlined"
                  />
               </div>
               <Button onClick={handleSubmit} variant="contained">
                  Sign Up
               </Button>
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
