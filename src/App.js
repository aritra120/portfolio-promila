import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faBehance
} from "@fortawesome/free-brands-svg-icons";

import "./App.css";
import Experience from "./Component/Experience.js";
import Contact from "./Component/Contact";
import Work from "./Component/Work";
import About from "./Component/About";

function App() {
  return (
    <>
      <div id="nav">
        <a href="#about">
          <div>About</div>
        </a>
        <a href="#experience">
          <div>Education</div>
        </a>
        <a href="#work">
          <div>Work</div>
        </a>
        <a href="#contact">
          <div>Contact</div>
        </a>
      </div>
      <div id="body">
        <div id="side-bar">
          <div className="line">
            <div className="left-line"></div>
            <div className="right-line"></div>
          </div>
          <div className="icons">
          <a href="https://www.instagram.com/procreate_designe/">
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span></a>
            <a href="https://www.facebook.com/promila.ghosh98?mibextid=ZbWKwL">
            <span>
              <FontAwesomeIcon icon={faFacebook} />
            </span></a>
            <a href="https://www.linkedin.com/in/promila-ghosh-b193441aa/"><span>
              <FontAwesomeIcon icon={faLinkedin} />
            </span></a>
            <a href="https://www.behance.net/PromilaGhosh2000/projects"><span>
              <FontAwesomeIcon icon={faBehance} />
            </span></a>
          </div>
        </div>
        <div id="mid">
          <section id="welcome">
            <div id="greet">Hi, my name is</div>
            <div id="name">Promila Ghosh</div>
            <div id="designation">Fashion Designer</div>
            <div id="role">
            I am a designing student , illustrator based in Kolkata & willing to take work or collaborate beyond India. I always enjoy the process of thinking and making something creative.
            </div>
          </section>

          <section id="about">
            <About />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="work">
            <Work />
          </section>

          <section id="contact">
            <Contact />
          </section>
          <footer id="disclaimer">Designed by Promila Ghosh</footer>
        </div>
        <div id="right-side-bar">
          <div className="line">
            <div className="left-line"></div>
            <div className="right-line"></div>
          </div>
          <div id="mail">promilaghoshofficial@gmail . com</div>
        </div>
      </div>
    </>
  );
}

export default App;
