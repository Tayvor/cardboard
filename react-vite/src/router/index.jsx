import { createBrowserRouter } from "react-router-dom";
import Layout from './Layout'
import LoginForm from '../components/LoginForm';
import ErrorPage from "./ErrorPage";
import SignupForm from "../components/SignupForm";
import Header from "../components/Header";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Header />
      },
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
