import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes";
import { FormProvider } from "./context/FormContext";

const router = createBrowserRouter(routes);


function App() {

  return (
    <>
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
    </>
  )
}

export default App
