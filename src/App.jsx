import "./App.css";
import image from "./assets/dog.jpg";
import image1 from "./assets/Facebook Icon.svg";
import image2 from "./assets/GitHub Icon.svg";
import image3 from "./assets/Instagram Icon.svg";
import image4 from "./assets/Linkedin Icon.svg";
import image5 from "./assets/Twitter Icon.svg";

function App() {
  return (
    <div className="wrapper">
      <img src={image} alt="profile image of a dog" />;
      <main>
        <header>
          <h1>Snoop Fog</h1>
          <h3>Frontend developer</h3>
          <p>doggomail@mail.dog</p>
        </header>
        <button>Email</button>
        <section>
          <div className="about">
            <h2>About</h2>
            <p>
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>
          <div className="about">
            <h2>Interests</h2>
            <p>
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <ul>
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
        </ul>
      </footer>
    </div>
  );
}

export default App;
