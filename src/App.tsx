import { Hero } from "./components/Hero";
import Services from "./components/Services";


import "./App.css";
import Nav from "./components/Nav";
import Strategy from "./components/Strategy";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <Nav/>
        <Hero/>
        <Services/>
        <Strategy/>
        <Team/>
        <Projects/> 
        <Testimonials/>
        <FAQs/>
      </main>

        <Footer/>
      {/* <footer>
        <div className="container footer-container">
          <h2>
            Join our community by using our services and grow your business.
          </h2>
          <a href="" className="btn-primary">
            Try It For Free
          </a>

          <div className="links">
            <div className="item">
              <h3>SandBox</h3>
              <p>© 2023 Sandbox. All rights reserved.</p>

              <a href="/">
                <img src="" alt="" />
              </a>
              <a href="/">
                <img src="" alt="" />
              </a>
              <a href="/">
                <img src="" alt="" />
              </a>
              <a href="/">
                <img src="" alt="" />
              </a>
            </div>
            <div className="item">
              <h4>Get in Touch</h4>
              <p>Moonshine St. 14/05 Light City, London, United Kingdom</p>

              <address>info@email.com</address>
              <p>00 (123) 456 78 90</p>
            </div>
            <div className="item">
              <h4>Learn More</h4>
              <a href="/">About Us</a>
              <a href="/">Our Story</a>
              <a href="/">Projects</a>
              <a href="/">Terms of Use</a>
              <a href="/">Privacy Policy</a>
            </div>
            <div className="item">
              <h4>Our Newsletter</h4>
              <p>
                Subscribe to our newsletter to get our news & deals delivered to
                you.
              </p>
              <div>
                <address></address>
                <button>Join</button>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
}

export default App;
