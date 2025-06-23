// src/routes/registration.js
import Registration from "../pages/Registration";
import Review from "../pages/Review";

export const registrationLoader = async () => {
  // Load saved form data or initial state here if needed
  return {};
};

export const registrationAction = async ({ request }) => {
  const formData = await request.formData();
  // You can parse and validate here, or save partially
  return Object.fromEntries(formData);
};

export const routes = [
  {
    path: "/register",
    element: <Registration />,
    loader: registrationLoader,
    action: registrationAction,
  },
  {
    path: "/register/review",
    element: <Review />,
  },
];
