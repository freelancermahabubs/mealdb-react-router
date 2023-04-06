import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Resturent from './Resturent';
import About from './About';
import Contact from './Contact';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement: <ErrorPage/>,
  children: [{
    path: '/',
    element: <Home/>, 
  },
  {
    path: 'resturent',
    element: <Resturent/>,
    loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
  },
  {
    path: 'about',
    element: <About/>
  },
  {
    path: 'contact',
    element: <Contact/>
  }
]
}])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>);

