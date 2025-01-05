import {Routes, Route} from "react-router-dom"
// import path 
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";

const app = () => {

  return( 
    <>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default app;