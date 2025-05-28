import './css/App.css'

function App() {

  return (
        <div className="container">
        <div className="name">
            <h1>Hi I am Oda Nøstdahl :) </h1>
            <p>~ I´m currently in my second year of a Bachelor's degree in programming at Kristiania</p>
        </div>


        <div className="buttons">
            <a href="https://www.linkedin.com/in/oda-nøstdahl-138623297" target="_blank" rel="noopener">
                <button className="connect-btn">Connect with me</button>
            </a>


            <button className="portfolio-btn">Show portfolio</button>

        </div>
    </div>
  );
}

export default App
