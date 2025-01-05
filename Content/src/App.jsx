import {Routes, Route} from "react-router-dom"
// import path 
import Home from "./pages/Home";

const app = () => {

  return( 
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default app;