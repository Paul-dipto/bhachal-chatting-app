import React from "react";
import profile from "../assets/profile.webp";
import { Button } from "@mui/material";

export const Group = () => {
   return (
      <div className="box">
         <h3 className="create">
            Group List{" "}
            <Button variant="contained" size="small">
               Create Group
            </Button>
         </h3>
         <div className="list">
            <div className="img">
               <picture>
                  <img src={profile} />
               </picture>
            </div>
            <div className="details">
               <h4>Friends Reunion</h4>
               <p>Hi! guys waddup nigga</p>
            </div>
            <div className="button">
               <Button variant="contained" size="small">
                  Join
               </Button>
            </div>
         </div>
         <div className="list">
            <div className="img">
               <picture>
                  <img src={profile} />
               </picture>
            </div>
            <div className="details">
               <h4>Friends Reunion</h4>
               <p>Hi! guys waddup nigga</p>
            </div>
            <div className="button">
               <Button variant="contained" size="small">
                  Join
               </Button>
            </div>
         </div>
         <div className="list">
            <div className="img">
               <picture>
                  <img src={profile} />
               </picture>
            </div>
            <div className="details">
               <h4>Friends Reunion</h4>
               <p>Hi! guys waddup nigga</p>
            </div>
            <div className="button">
               <Button variant="contained" size="small">
                  Join
               </Button>
            </div>
         </div>
         <div className="list">
            <div className="img">
               <picture>
                  <img src={profile} />
               </picture>
            </div>
            <div className="details">
               <h4>Friends Reunion</h4>
               <p>Hi! guys waddup nigga</p>
            </div>
            <div className="button">
               <Button variant="contained" size="small">
                  Join
               </Button>
            </div>
         </div>
         <div className="list">
            <div className="img">
               <picture>
                  <img src={profile} />
               </picture>
            </div>
            <div className="details">
               <h4>Friends Reunion</h4>
               <p>Hi! guys waddup nigga</p>
            </div>
            <div className="button">
               <Button variant="contained" size="small">
                  Join
               </Button>
            </div>
         </div>
         <div className="list">
            <div className="img">
               <picture>
                  <img src={profile} />
               </picture>
            </div>
            <div className="details">
               <h4>Friends Reunion</h4>
               <p>Hi! guys waddup nigga</p>
            </div>
            <div className="button">
               <Button variant="contained" size="small">
                  Join
               </Button>
            </div>
         </div>
      </div>
   );
};
