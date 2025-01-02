import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom"
import './Css/index.css'
import './Css/solar.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));
root.render(
<Router>
  <App />
</Router>
)  

