import React from "react";
import { Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

const Home = () => {
   const auth = getAuth();
   let navigate = useNavigate();
   let handleLogout = () => {
      signOut(auth)
         .then(() => {
            navigate("/login");
         })
         .catch((error) => {
            // An error happened.
         });
   };
   return (
      <>
         <Grid container spacing={2}>
            <Grid xs={4}>
               <h1>xs=4</h1>
            </Grid>
            <Grid xs={4}>
               <h1>xs=4</h1>
            </Grid>
            <Grid xs={4}>
               <h1>xs=8</h1>
            </Grid>
         </Grid>
         {/* <Button onClick={handleLogout} variant="contained">
            log out
         </Button> */}
      </>
   );
};

export default Home;
