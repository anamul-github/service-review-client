
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AllServices from './components/AllServices/AllServices';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Footer from './components/Shared/Footer/Footer';
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
          path: '/allServices/:id',
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/services/${params.id}`)
          },
          element: <ServiceDetails></ServiceDetails>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/footer',
          element: <Footer></Footer>
        }
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
