import { createBrowserRouter } from "react-router-dom";
import Layout from './Layout'
import ErrorPage from "./ErrorPage";
import Search from "../components/Search";
import Cards from "../components/Cards";
import Decks from "../components/Decks";
import Dashboard from "../components/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'search',
        element: <Search />
      },
      {
        path: 'cards',
        element: <Cards />
      },
      {
        path: 'decks',
        element: <Decks />
      },
      {
        path: '',
        element: <Dashboard />
      }
    ],
  }
])
