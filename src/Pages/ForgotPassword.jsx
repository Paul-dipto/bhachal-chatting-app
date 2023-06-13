import React, { useEffect, useState } from "react";
import { Grid, TextField, Button, Alert } from "@mui/material";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
   let [text, setText] = useState("");
   const auth = getAuth();

   let navigate = useNavigate();

   let handleForgotpass = () => {
      sendPasswordResetEmail(auth, text)
         .then(() => {
            navigate("/login");
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
         });
   };
   return (
      <div className="forgotpassword">
         <div className="box">
            <h1>Forgot Password</h1>
            <TextField
               onChange={(e) => setText(e.target.value)}
               id="outlined-basic"
               label="Email"
               variant="outlined"
            />
            <Button onClick={handleForgotpass} variant="contained">
               Reset Password
            </Button>
         </div>
      </div>
   );
};

export default ForgotPassword;
