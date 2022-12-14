
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import AllServices from './components/AllServices/AllServices';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyReview from './components/MyReview/MyReview';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/allServices',
          element: <AllServices></AllServices>
        },
        {
          path: '/serviceDetails/:id',
          loader: async ({ params }) => {
            return fetch(`https://service-review-server-delta.vercel.app/services/${params.id}`)
          },
          element: <ServiceDetails></ServiceDetails>
        },
        {
          path: '/myReview',
          element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
        },
        {
          path: '/addService',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
