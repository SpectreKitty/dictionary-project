import "./App.css";
import logo from "./shecodeslogo.png";
import Dictionary from "./Dictionary.js";

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
        <footer className="text-center">
          Coded by Astry Brana, open-sourced on{" "}
          <a href="https://github.com/SpectreKitty/dictionary-project">
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://dictionary-project-by-astry.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
