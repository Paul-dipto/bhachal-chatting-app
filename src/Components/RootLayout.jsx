import React from "react";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import profile from "../assets/profile.webp";
import { AiOutlineHome } from "react-icons/ai";
import { LuMessageSquare } from "react-icons/lu";
import { GrNotification, GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";

const RootLayout = () => {
   const location = useLocation();
   return (
      <>
         <Grid container spacing={4}>
            <Grid item xs={1}>
               <div className="navbar">
                  <div className="nav-container">
                     <picture>
                        <img src={profile} />
                     </picture>
                     <ul>
                        <li>
                           <Link
                              to="/bachal/home"
                              className={
                                 location.pathname == "/bachal/home"
                                    ? "active"
                                    : "icon"
                              }
                           >
                              <AiOutlineHome />
                           </Link>
                        </li>
                        <li>
                           <Link
                              to="/bachal/Massage"
                              className={
                                 location.pathname == "/bachal/M assage"
                                    ? "active"
                                    : "icon"
                              }
                           >
                              <LuMessageSquare />
                           </Link>
                        </li>
                        <li>
                           <Link className="icon">
                              <GrNotification />
                           </Link>
                        </li>
                        <li>
                           <Link className="icon">
                              <FcSettings />
                           </Link>
                        </li>
                        <li>
                           <Link className="icon">
                              <GrLogout />
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </Grid>
            <Grid item xs={11}>
               <Outlet />
            </Grid>
         </Grid>
      </>
   );
};

export default RootLayout;
