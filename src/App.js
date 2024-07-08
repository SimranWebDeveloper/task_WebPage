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
        }
        // {
        //   path: '/account/create',
        //   element: <Join />
        // },
        // {
        //   path: '/account/signin',
        //   element: <SignIn />
        // },
        // // cards page
        // {
        //   path: '/cards',
        //   element:<CardModal openCard={false}/>
        // },
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
        <RouterProvider router={router} />
      </ContextProvider>
    </div>
  );
}

export default App;
