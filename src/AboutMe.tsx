import profilePicture from './image/mio.jpeg'
import './css/aboutMe.css'
import { Section} from "./animation/Section.tsx";
import java from './image/java.png'
import csharp from './image/Csharp.png'
import javascript from './image/Javascript.png'
import html from './image/html.png'
import python from './image/python.png'
import typescript from './image/typescript.png'
import c from './image/c.png'
import docker from './image/docker.png'
import mongodb from './image/mongodb.png'
import spring from './image/spring.png'
import react from './image/react.png'

function AboutMe() {
    return (
        <>
            <Section direction="up">
            <div className="about-me">
                <div className="info-box">
                    <h1>Get to know me</h1>
                    <p>
                        Hi, I´m Oda and I´m currently in my second year of a Bachelor's degree in programming at
                        Kristiania.

                        Beyond academics, I’m passionate about creating a more inclusive tech environment. I actively
                        contribute to
                        this through my role as co-leader on the board of Kvinner&IT💓
                    </p>
                </div>

                <div className="img-container">
                    <img src={profilePicture} className="profile-pic"/>
                </div>
            </div>
        </Section>

        <Section direction="up">
            <div className="skills">
                <h1>SKILLS</h1>
                <h3>Coding Languages</h3>
                <div className="skills-wrapper">
                    <div className="code-language">
                        <img id="coding-img" src={java}/>
                        <p>Java</p>
                    </div>

                    <div className="code-language">
                        <img id="coding-img" src={csharp}/>
                        <p>C#</p>
                        <div className="progress-bar">
                            <div className="fill-progress" style={{"--progress": "80%"} as React.CSSProperties}></div>
                        </div>
                    </div>

                    <div className="code-language">
                        <img id="coding-img" src={javascript}/>
                        <p>JavaScript</p>
                    </div>

                    <div className="code-language">
                        <img id="coding-img" src={typescript}/>
                        <p>Typescript</p>
                    </div>

                    <div className="code-language">
                        <img id="coding-img" src={python}/>
                        <p>Python</p>
                    </div>

                    <div className="code-language">
                        <img id="coding-img" src={html}/>
                        <p>HTML/CSS</p>
                    </div>

                    <div className="code-language">
                        <img id="coding-img" src={c}/>
                        <p>C</p>
                    </div>
                </div>

            </div>
        </Section>

    <Section direction="up">
            <div className="other-skills">
                <h2>Other</h2>
                <div className="other-wrapper">
                    <div className="other">
                        <img id="other-img" src={docker}/>
                        <p>Docker</p>
                    </div>

                    <div className="other">
                        <img id="other-img" src={mongodb}/>
                        <p>MongoDB</p>
                    </div>

                    <div className="other">
                        <img id="other-img" src={react}/>
                        <p>React</p>
                    </div>

                    <div className="other">
                        <img id="other-img" src={spring}/>
                        <p>Spring boot</p>
                    </div>
                </div>
            </div>
    </Section>

    <Section direction="left">
            <div className="education">
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"/>
                        <div className="timeline-content">
                            <h3>Høyskolen Kristiania</h3>
                            <p>Bachelor i informasjonsteknologi – programmering</p>
                            <span className="timeline-date">2023–2026</span>
                        </div>
                    </div>
                </div>
            </div>
    </Section>

    <Section direction="up">
            <div className="volenteer">
                <h1>Volunteering</h1>
            </div>
    </Section>
        </>
    );
}

export default AboutMe