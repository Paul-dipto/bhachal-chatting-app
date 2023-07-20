import React, { useEffect, useState } from "react";
import profile from "../assets/profile.webp";
import { Button } from "@mui/material";
import {
   getDatabase,
   ref,
   onValue,
   set,
   push,
   remove,
} from "firebase/database";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";

export const UserList = () => {
   let [userList, setuserList] = useState([]);
   let [friendReq, setFriendReq] = useState([]);
   const auth = getAuth();
   const db = getDatabase();
   let userdata = useSelector((state) => state.loggedUser.loginUser);

   useEffect(() => {
      const usersRef = ref(db, "friendReq/");
      onValue(usersRef, (snapshot) => {
         let arr = [];
         snapshot.forEach((item) => {
            arr.push(item.val().whosendid + item.val().whorecieveid);
         });
         setFriendReq(arr);
      });
   }, []);

   useEffect(() => {
      const usersRef = ref(db, "users/");
      onValue(usersRef, (snapshot) => {
         let arr = [];
         snapshot.forEach((item) => {
            if (userdata.uid != item.key) {
               arr.push({ ...item.val(), id: item.key });
            }
         });
         setuserList(arr);
      });
   }, []);

   let handlefriendReq = (item) => {
      console.log(item);
      set(ref(db, "friendReq/" + item.id), {
         whosendid: auth.currentUser.uid,
         whosendname: auth.currentUser.displayName,
         whorecieveid: item.id,
         whorecievename: item.username,
      }).then(() => console.log("halai gese"));
   };

   let handleCancel = (item) => {
      remove(ref(db, "friendReq/" + item.id));
   };

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
                  {friendReq.includes(item.id + auth.currentUser.uid) ? (
                     <Button
                        onClick={() => handleCancel(item)}
                        variant="contained"
                     >
                        cancel
                     </Button>
                  ) : (
                     <Button
                        onClick={() => handlefriendReq(item)}
                        variant="contained"
                     >
                        add friend
                     </Button>
                  )}
               </div>
            </div>
         ))}
      </div>
   );
};
