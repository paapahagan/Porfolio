import React from "react";
import About from "./components/About";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Skills />
    </div>
  );
}

export default App;
