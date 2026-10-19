import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Scope from "./components/Scope.jsx";
import Milestones from "./components/Milestones.jsx";
import Thesis from "./components/Thesis.jsx";
import Presentations from "./components/Presentations.jsx";
import Banner from "./components/Banner.jsx";
import Team from "./components/Team.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { navItems } from "./data/content.js";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <Header navItems={navItems} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <Hero />
        <About />
        <Scope />
        <Milestones />
        <Thesis />
        <Presentations />
        <Banner />
        <Team />
        <Contact />
      </main>

      <Footer navItems={navItems} />
    </div>
  );
}
