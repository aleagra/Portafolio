import React, { useEffect } from "react";
import MouseContextProvider from "./context/MouseContext";
import {
  About,
  Background,
  Footer,
  Home,
  Mouse,
  Navbar,
  Proyects,
  Skills,
} from "./components";

export function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MouseContextProvider>
      <Background />
      <Navbar />
      <Home />
      <About />
      <Proyects />
      <Skills />
      <Footer />
      <Mouse />
    </MouseContextProvider>
  );
}
