import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './routes/home/Home'
import Navbar from './components/navbar/Navbar'
import Favourites from './routes/favourites/Favourites'
import Surah from './components/surahdetails/Surah'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar />
        <Home />
        </div>
    },
    {
       path:"/favourites",
      element:
      <div>
        <Navbar />
        <Favourites />
        </div>
    },
     {
       path:"/surah/:id",
       element:
      <div>
        <Navbar />
        <Surah />
      </div>
    },
  ]
);


function App() {

  return (
    <>
     <div>
        <RouterProvider router={router} />
     </div>
    </>
  )
}

export default App
