import React, { useEffect, useState } from "react";
import profile from "../assets/profile.webp";
import { Button } from "@mui/material";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { getAuth } from "firebase/auth";

export const UserList = () => {
   let [userList, setuserList] = useState([]);
   const auth = getAuth();
   console.log(auth.currentUser);
   useEffect(() => {
      const usersRef = ref(db, "users/");
      onValue(usersRef, (snapshot) => {
         let arr = [];
         //   const data = snapshot.val();
         snapshot.forEach((item) => {
            arr.push({ ...item.val(), id: item.key });
         });
         setuserList(arr);
      });
      console.log(userList);
   }, []);

   let handleFriendReq = (item) => {
      set(ref(db, "FriendReq/"), {
         whosendid: auth.currentUser.uid,
         whosendname: auth.currentUser.displayName,
         whorecieveid: item.id,
         whorecievename: item.username,
      });
   };

   const db = getDatabase();
   return (
      <div className="box">
         <h3 className="create">User List </h3>
         {userList.map((item) => (
            <div className="list">
               <div className="img">
                  <picture>
                     <img src={profile} />
                  </picture>
               </div>
               <div className="details">
                  <h4>{item.username}</h4>
                  <p>{item.email}</p>
               </div>
               <div className="button">
                  <Button
                     onClick={() => handleFriendReq(item)}
                     variant="contained"
                     size="small"
                  >
                     Add Friend
                  </Button>
               </div>
            </div>
         ))}
      </div>
   );
};
