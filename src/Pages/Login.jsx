import React from "react";
import { Grid, TextField, Button, Alert } from "@mui/material";
import loginimg from "../assets/loginimg.webp";
import logingoogle from "../assets/logingoogle.png";
import Regiheadinglog from "../Components/Regiheadinglog";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import {
   getAuth,
   signInWithEmailAndPassword,
   GoogleAuthProvider,
   signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";

let intialValues = {
   email: "",
   password: "",
   loading: false,
   error: "",
   error2: "",
   error3: "",
};

const Login = () => {
   const provider = new GoogleAuthProvider();
   const auth = getAuth();
   let navigate = useNavigate();
   let [values, setValues] = useState(intialValues);
   let [error, setError] = useState("");
   const notify = () => toast("");

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
            error2: "",
         });
         return;
      }

      if (!password) {
         setValues({
            ...values,
            error: "Enter an password",
            error2: "",
         });
         return;
      }
      setValues({
         ...values,
         loading: true,
      });

      signInWithEmailAndPassword(auth, email, password)
         .then((user) => {
            console.log(user);
            setValues({
               ...values,
               email: "",
               password: "",
               loading: false,
            });
            if (!user.user.emailVerified) {
               toast("please verify email to login");
            } else {
               navigate("/bachal/Home");
            }
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            setError(errorCode);
            if (errorCode === "auth/user-not-found") {
               setValues({
                  ...values,
                  email: "",
                  loading: false,
                  error2: "Email does not exist",
                  error3: "",
                  error: "",
               });
            } else if (errorCode === "auth/wrong-password") {
               setValues({
                  ...values,
                  password: "",
                  loading: false,
                  error3: "wrong password",
                  error: "",
                  error2: "",
               });
            }
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
                  {values.error2.includes("Email") && (
                     <Alert severity="error">{values.error2}</Alert>
                  )}
                  {error && (
                     <Alert variant="filled" severity="error">
                        {error}
                     </Alert>
                  )}
               </div>
               <div className="reg-form">
                  <TextField
                     onChange={handleValues}
                     type="password"
                     value={values.password}
                     name="password"
                     id="outlined-basic"
                     label="password"
                     variant="outlined"
                     placeholder="Enter Your Password"
                  />
                  {values.error.includes("password") && (
                     <Alert severity="error">{values.error}</Alert>
                  )}
                  {values.error3.includes("password") && (
                     <Alert severity="error">{values.error3}</Alert>
                  )}
                  {error && (
                     <Alert variant="filled" severity="error">
                        {error}
                     </Alert>
                  )}
               </div>
               {values.loading ? (
                  <LoadingButton loading variant="outlined">
                     Submit
                  </LoadingButton>
               ) : (
                  <>
                     <Button onClick={handleSubmit} variant="contained">
                        Login to Continue
                     </Button>
                     <button onClick={notify} variant="contained">
                        Notify!
                     </button>
                  </>
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
