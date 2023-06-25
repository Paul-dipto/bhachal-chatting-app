import {
   createRoutesFromElements,
   RouterProvider,
   createBrowserRouter,
   Route,
} from "react-router-dom";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import Home from "./Pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Massage from "./Pages/Massage";
import RootLayout from "./Components/RootLayout";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route>
         <Route path="/" element={<Registration />}></Route>
         <Route path="/login" element={<Login />}></Route>
         <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
         <Route path="/bachal" element={<RootLayout />}>
            <Route path="Home" element={<Home />}></Route>
            <Route path="Massage" element={<Massage />}></Route>
         </Route>
      </Route>
   )
);

function App() {
   return (
      <>
         <RouterProvider router={router} />;
         <ToastContainer />
      </>
   );
}

export default App;
