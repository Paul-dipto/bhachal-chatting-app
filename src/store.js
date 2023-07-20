import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/users/userSlices";

export default configureStore({
   reducer: {
      loggedUser: userReducer,
   },
});
