import { createBrowserRouter } from "react-router-dom";
import MainOne from "../layouts/MainOne";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import SignUp from "../components/SignUp";
import privateRouter from "../privateRouter/privateRouter";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import Cart from "../pages/shop/Cart";

const router = createBrowserRouter([
     {
      path:"/",
      element:<MainOne/>,
      children: [
        {
          path: "/",
          element: <Home/>, // Example route for the Home page.
        },
        {
          path: "/menu",
          element: <privateRouter>
            <Menu/></privateRouter> ,
        }
        ,{
          path: "/update-profile",
          element: 
            <UpdateProfile/> ,
        },
        {
          path:"/cart-page",
          element:
          <Cart/>
        },
      ],},
      {
        path: "/signup",
        element: <SignUp/>,
      }
     
]);
export default router;