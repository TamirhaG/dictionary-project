import logo from "./TG-logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by {""}
            <a
              href="https://www.linkedin.com/in/tamirha/"
              target="_blank"
              rel="noreferrer"
            >
              Tamirha Giraldo
            </a>
            , and it is{" "}
            <a
              href="https://github.com/TamirhaG/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              opened sourced on GitHub
            </a>{" "}
            and
            <a
              href="https://visionary-marshmallow-fe6d36.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
