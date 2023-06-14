import React from "react";
import About from "./components/About";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
  return (
    <div>
      <Nav />
      <Landing />
      <About />
      <Skills />
      <Works />
    </div>
  );
}

export default App;
