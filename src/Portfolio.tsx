
function Portfolio() {
    return (
        <>
            <div className="latest-projects">
                <h1>Latest projects </h1>
                <p>Link til github?</p>
            </div>
            <div className="projects">
                <h1>My projects</h1>

            </div>

            <div className="collabs">
                <h1>Collabs</h1>
                <div className="collab-grid">
                    <div className="collab-card">
                        <h2>PEATA project</h2>
                        <p>Tekst om prosjektet</p>
                        <a href="link">
                            <button className="link-btn">Github ikon</button>
                        </a>
                    </div>

                    <div className="collab-card">
                        <h2>Event-system</h2>
                        <p>Tekst om prosjektet</p>
                        <a href="link">
                            <button className="link-btn">Github ikon</button>
                        </a>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Portfolio