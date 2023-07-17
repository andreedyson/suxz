import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Learnings from "./components/Learnings";
import About from "./components/About";
import Companies from "./components/Companies";
import Testimonials from "./components/Testimonials";
import Waiting from "./components/Waiting";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Learnings />
      <About />
      <Companies />
      <Testimonials />
      <Waiting />
      <Footer />
    </div>
  );
}

export default App;
