import { useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { motion, useScroll, useTransform} from "framer-motion";
import './css/navbar.css'

function Navbar() {

    const initialHeight = 140;
    const finalHeight = 88;
    const thresholdY = 170;

    const { scrollY } = useScroll();

    const animatedHeight = useTransform(
        scrollY,
        [0, initialHeight - finalHeight],
        [initialHeight, finalHeight]
    );


    const [isPastThreshold, setIsPastThreshold] = useState(false);
    useEffect(() => {
        return scrollY.onChange((latest) => setIsPastThreshold(latest > thresholdY));
    }, [scrollY]);

    return (
        <motion.nav className="navbar" style={{height:animatedHeight}}>
            <motion.h1
                initial={{opacity: 0}}
                animate={{ opacity: isPastThreshold ? 1 : 0}}
                transition={{duration: 0.3}}>ODA NØSTDAHL</motion.h1>

            <ul className="nav-links">
                <motion.li whileHover={{scale: 1.1}}><Link to="/">Home</Link></motion.li>
                <motion.li whileHover={{scale: 1.1}}><Link to="/about">About me</Link></motion.li>
                <motion.li whileHover={{scale: 1.1}}><Link to="/portfolio">Portfolio</Link></motion.li>
            </ul>
        </motion.nav>
    );
}

export default Navbar;