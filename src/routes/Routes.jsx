// src/routes/registration.js
import Mainlayout from "../Layout/Mainlayout";
import Home from "../pages/Homepage";
import Registration from "../pages/Registration";
import Review from "../pages/Review";

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
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "register",
        element: <Registration />,
        loader: registrationLoader,
        action: registrationAction,
      },
      {
        path: "register/review",
        element: <Review />,
      },
    ],
  },
];
