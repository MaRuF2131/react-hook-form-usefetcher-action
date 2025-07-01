// src/routes/registration.js
import Mainlayout from "../Layout/Mainlayout";
import Home from "../pages/Homepage";
import Registration from "../pages/Registration";
import Review from "../pages/Review";
import Core_feature_of_useForm from "../components/Core-feature-of-useForm"
import { ActionOnForm } from "../components/ActionOnForm";
import ErrorPage from "../pages/Errorpage";

export const registrationLoader = async () => {
  return {};
};

export const registrationAction = async ({ request }) => {
  const formData = await request.formData();
  return Object.fromEntries(formData);
};

export const routes = [
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/register",
        element: <Registration />,
        loader: registrationLoader,
        action: registrationAction,
      },
      {
        path: "register/review",
        element: <Review />,
      },
      {
        path: "/all-feature",
        element:<Core_feature_of_useForm></Core_feature_of_useForm>,
      },
      {
        path: "/save",/// can not be accessed directly
        // This route is used to handle form submission
        element:<></>,
        action:ActionOnForm,
          loader: () => {
            // Optional: block direct GET access
            throw new Response("Not Found", { 
              status: 404,
              statusText: "This route is not directly accessible.",
            });
          }
      },
    ],
  },
];
