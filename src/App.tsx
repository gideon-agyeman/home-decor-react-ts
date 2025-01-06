import { createBrowserRouter, RouterProvider } from 'react-router';
import {
  HomeLayout,
  Error,
  Landing,
  About,
  Cart,
  Register,
  Login,
  Products,
  SingleProduct,
  Checkout,
  Orders,
} from './pages';
import { ToastContainer } from 'react-toastify';
import { PageError } from './components';

import {
  landingPageLoader,
  singleProductLoader,
  productsPageLoader,
  checkoutPageLoader,
  orderPageLoader,
} from './utils/loaders';

import { store } from './store';

import {
  registerUserAction,
  loginUserAction,
  checkoutFormAction,
} from './utils';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <PageError />,
        loader: landingPageLoader,
      },
      { path: 'about', element: <About />, errorElement: <PageError /> },
      {
        path: 'products',
        element: <Products />,
        errorElement: <PageError />,
        loader: productsPageLoader,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <PageError />,
        loader: singleProductLoader,
      },
      { path: 'cart', element: <Cart />, errorElement: <PageError /> },
      {
        path: 'orders',
        element: <Orders />,
        errorElement: <PageError />,
        loader: orderPageLoader(store),
      },
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <PageError />,
        loader: checkoutPageLoader(store),
        action: checkoutFormAction(store),
      },
    ],
  },
  {
    path: '/Register',
    element: <Register />,
    errorElement: <Error />,
    action: registerUserAction,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginUserAction(store),
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default App;
