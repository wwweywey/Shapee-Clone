import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/header/Header.jsx";
import About from "./components/about/About.jsx";
import Home from "./components/home/Home.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
      <About />
    </>
  );
}

export default App;
