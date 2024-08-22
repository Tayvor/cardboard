import { createBrowserRouter } from "react-router-dom";
import Layout from './Layout'
import ErrorPage from "./ErrorPage";
import LoginForm from '../components/Forms/LoginForm';
import SignupForm from "../components/Forms/SignupForm";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'login',
        element: <LoginForm />
      },
      {
        path: 'signup',
        element: <SignupForm />
      },
    ],
  }
])
