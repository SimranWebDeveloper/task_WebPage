import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../src/pages/home/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { AppLayout } from "./router/AppLayout";
import { ContextProvider } from "./context/GlobalState";
import { Product } from "./pages/product/Product";
import { DetailsProduct } from "./components/DetailsProduct";
import { NotFound } from "./components/NotFound";
import { AddToCard } from "./components/AddToCard";
import { ToastContainer } from "react-toastify";
import { WishList } from "./components/WishList";
import { Join } from "./account/Join";
import { SignIn } from "./account/SignIn";


function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout/>,
      children: [
        { 
          path: '/',
          element: <Home />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/about',
          element: <About/>
        },
        // for input search
        {
          path: '/product',
          element: <Product />,
        },
        // for seact by caregory
        {
          path: '/product/:categoryName',
          element: <Product />,
        },

        //when click card to send id to detail page
        {
          path: '/:categoryName',
          element: <Home />,
  
        },
        // detail page
        {
          path:'/details/:id',
          element: <DetailsProduct />,
        },
        // ----------------------------------------

        {
          path: '/*',
          element: <NotFound />
        },

        {
          path: '/add-to-card',
          element: <AddToCard />
        },

        {
          path: '/wishlist',
          element: <WishList />
        },
        {
          path: '/account/signup',
          element: <Join />
        },
        {
          path: '/account/signin',
          element: <SignIn />
        },
        // // admin panel
        // {
        //   path: '/admin',
        //   element:<MainLayout><Dashboard/></MainLayout>
        // }
  
      ]
    }
  ]);
  return (
    <div className="App">
      <ContextProvider>
      <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}

        <RouterProvider router={router} />
        <ToastContainer />
      </ContextProvider>
    </div>
  );
}

export default App;
