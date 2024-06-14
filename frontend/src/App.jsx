import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import List, { loader as booksLoader } from "./components/List";
import NewForm, { action as bookCreateAction } from "./pages/NewForm";
import EditForm, { action as bookEditAction } from "./pages/EditForm";
import { loader as bookDetailLoader } from "./UI/Form";
import BookDetail from "./components/BookDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <List />, loader: booksLoader },
      {
        path: "/edit/:id",
        element: <EditForm />,
        loader: bookDetailLoader,
        action: bookEditAction,
      },
      { path: "/new", element: <NewForm />, action: bookCreateAction },
      { path: "/view/:id", element: <BookDetail />, loader: bookDetailLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
