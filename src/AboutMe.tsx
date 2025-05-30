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

        <Section direction="up">
            <div className="skills">
                <h1>SKILLS</h1>
                <h3>Coding Languages</h3>
                <div className="skills-wrapper">
                    <div className="code-language">
                        <img id="coding-img" src={java}/>
                        <p className="language-label">Java</p>
                    </div>

                    <div className="code-language">
                        <img id="coding-img" src={csharp}/>
                        <p className="language-label">C#</p>
                    </div>

                    <div className="code-language">
                        <img id="coding-img" src={javascript}/>
                        <p className="language-label">JavaScript</p>
                    </div>

                    <div className="code-language">
                        <img id="coding-img" src={typescript}/>
                        <p className="language-label">Typescript</p>
                    </div>

                    <div className="code-language">
                        <img id="coding-img" src={python}/>
                        <p className="language-label">Python</p>
                    </div>

                    <div className="code-language">
                        <img id="coding-img" src={html}/>
                        <p className="language-label">HTML/CSS</p>
                    </div>

                    <div className="code-language">
                        <img id="coding-img" src={c}/>
                        <p className="language-label">C</p>
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
                        <p className="language-label">Docker</p>
                    </div>

                    <div className="other">
                        <img id="other-img" src={mongodb}/>
                        <p className="language-label">MongoDB</p>
                    </div>

                    <div className="other">
                        <img id="other-img" src={react}/>
                        <p className="language-label">React</p>
                    </div>

                    <div className="other">
                        <img id="other-img" src={spring}/>
                        <p className="language-label">Spring boot</p>
                    </div>
                </div>
            </div>
    </Section>

    <Section direction="left">
            <div className="education">
                            <h3>Høyskolen Kristiania</h3>
                            <p>Bachelor i informasjonsteknologi – programmering</p>
                            <p>2023–2026</p>
            </div>
    </Section>

    <Section direction="up">
            <div className="volenteer">
                <h1>Volunteering</h1>
                <p>Kvinner&IT</p>
                <p>JavaZone</p>
                <p>Girl tech fest</p>
            </div>
    </Section>
        </>
    );
}

export default AboutMe