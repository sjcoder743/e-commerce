import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "login",
        element: <LogIn />
      },
      {
        path: "signup",
        element: <SignUp />
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />
      },
    ]
  },
]);

export default router;