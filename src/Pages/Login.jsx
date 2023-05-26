import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import loginimg from "../assets/loginimg.webp";
import logingoogle from "../assets/logingoogle.png";
import Regiheadinglog from "../Components/Regiheadinglog";

const Login = () => {
   return (
      <Grid container spacing={2}>
         <Grid item xs={6}>
            <div className="regcontainer">
               <Regiheadinglog
                  className="headingreglog"
                  title="Login to your account!"
               />
               <picture>
                  <img src={logingoogle} />
               </picture>
               <div className="reg-form">
                  <TextField
                     id="outlined-basic"
                     label="Email-Adress"
                     variant="outlined"
                  />
               </div>
               <div className="reg-form">
                  <TextField
                     id="outlined-basic"
                     label="Password"
                     variant="outlined"
                     placeholder="Enter Your Password"
                  />
               </div>
               <Button className="login-btn" variant="contained">
                  Login to Continue
               </Button>
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
