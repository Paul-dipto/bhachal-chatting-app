import React from "react";
import { Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { Group } from "../Components/Group";
import FriendRequest from "../Components/FriendRequest";
import Friends from "../Components/Friends";
import { MyGroups } from "../Components/MyGroups";
import { UserList } from "../Components/UserList";
import { Block } from "../Components/Block";

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
               <Group />
               <FriendRequest />
            </Grid>
            <Grid xs={4}>
               <Friends />
               <MyGroups />
            </Grid>
            <Grid xs={4}>
               <UserList />
               <Block />
            </Grid>
         </Grid>
         {/* <Button onClick={handleLogout} variant="contained">
            log out
         </Button> */}
      </>
   );
};

export default Home;
