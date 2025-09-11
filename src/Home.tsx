import './css/App.css'
import AboutMe from "./AboutMe.tsx";
import { Link } from "react-router-dom";

function Home() {

  return (
      <>
        <div className="container">
        <div className="name">
            <h1>Hi I am Oda Nøstdahl :) </h1>
            <p>~ I´m currently in my third year of a Bachelor's degree in programming at Kristiania</p>
        </div>


        <div className="buttons">
            <a href="https://www.linkedin.com/in/oda-nøstdahl-138623297" target="_blank" rel="noopener">
                <button className="connect-btn">Connect with me</button>
            </a>

            <Link to="/portfolio">
                <button className="portfolio-btn">Show portfolio</button>
            </Link>
        </div>
        </div>

          <AboutMe />
      </>
  );
}

export default Home
