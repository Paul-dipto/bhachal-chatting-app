import React from "react";
import { Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
         <Button onClick={handleLogout} variant="contained">
            log out
         </Button>
      </>
   );
};

export default Home;
