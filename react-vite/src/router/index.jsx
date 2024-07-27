import { createBrowserRouter } from "react-router-dom";
import Layout from './Layout'
import LoginForm from '../components/LoginForm';
import ErrorPage from "./ErrorPage";

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
    ],
  }
])
