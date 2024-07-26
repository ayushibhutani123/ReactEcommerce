import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout.jsx";
import MainLayout from "./Layout/MainLayout.jsx"
import DetailPage from "./page/DetailPage.jsx";
import CartContextProvider from "./Components/context/CartContextProvider.jsx";
import SearchComponent from "./Components/SearchComponent/SearchComponent.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        path: "/",
        element: <App />,
      },  {
        path: "/checkout",
        element: <Checkout />,
      },  {
        path: ":id",
        element: <DetailPage />,
      },
      {
        path:"/search",
        element:<SearchComponent/>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <RouterProvider router={router} />
  </CartContextProvider>

);
