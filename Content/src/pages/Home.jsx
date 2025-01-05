import Navbar from "../Components/Navbar"
import {searchPhoto} from "../Api/apiReq.jsx"
import { useState } from "react"
import axios from "axios"

const Home = () => {
    const [photos, setPhotos ] = useState([])
    
    return(
        <div>
            <Navbar />
            <div className="ml-4">

            </div>
        </div>
    )
}

export default Home