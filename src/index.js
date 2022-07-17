import ReactDOM from "react-dom";
import App from "./App.jsx";
import "../src/scss/index.scss";

ReactDOM.render(<App />, document.querySelector("#root"));

/* Hamburger mobile menu */
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
  hamburger.classList.toggle("active");
});
