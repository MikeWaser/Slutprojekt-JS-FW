import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import FavoritesPage from "./Pages/FavoritesPage/FavoritesPage";
import ReadBooksPage from "./Pages/ReadBooksPage/ReadBooksPage";
import BookDetails from "./components/BookDetails/BookDetails";
import { GlobalStateProvider } from "./context/GlobalStateProvider";
import NavBar from "./components/Navbar/Navbar";
import ErrorComponent from "./Pages/ErrorComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/read-books",
    element: <ReadBooksPage />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/book/:id",
    element: <BookDetails />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "*",
    element: <ErrorComponent />,
  },
]);

const AppRouter: React.FC = () => (
  <GlobalStateProvider>
    <NavBar />
    <RouterProvider router={router} />
  </GlobalStateProvider>
);

export default AppRouter;
