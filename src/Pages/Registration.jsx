import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import regiimg from "../assets/Registration-img.webp";
import Regiheadinglog from "../Components/Regiheadinglog";

const Registration = () => {
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
                     id="outlined-basic"
                     label="Email-Adress"
                     variant="outlined"
                  />
               </div>
               <div className="reg-form">
                  <TextField
                     id="outlined-basic"
                     label="First-Name"
                     variant="outlined"
                  />
               </div>
               <div className="reg-form">
                  <TextField
                     id="outlined-basic"
                     label="Password"
                     variant="outlined"
                  />
               </div>
               <Button variant="contained">Sign Up</Button>
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
