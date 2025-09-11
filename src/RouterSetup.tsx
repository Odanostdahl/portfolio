import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./navBar.tsx";
import AboutMe from "./AboutMe.tsx";
import Home from "./Home.tsx";
import Portfolio from "./Portfolio.tsx";
import Connect from "./Connect.tsx";

function AppRoutes(){
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<AboutMe />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
                <Route path="/connect" element={<Connect />}/>
            </Routes>
        </Router>
    )
}
export default AppRoutes
