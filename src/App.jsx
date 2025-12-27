import React, { useState } from "react";
import "./tailwind.css";
import "./index.css";

import { Routes, Route, Link } from "react-router-dom";
import Catalog from "./Catalog.jsx";
import Involve from "./Involve.jsx";
import About from "./About.jsx";
import Blog from "./Blog.jsx";
import Support from "./Support.jsx";

/* --- IMPORT ALL IMAGES FOR GITHUB PAGES COMPATIBILITY --- */
import batsup from "/batsup.jpg";
import bk from "/bk.jpg";
import noodle from "/noodle.jpg";
import hk from "/hk.jpg";
import nail from "/nail.jpg";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-white font-sans text-gray-800">

      {/* NAVIGATION BAR */}
      <header className="bg-primary text-secondary py-3 px-8 flex flex-col md:flex-row justify-between items-center text-sm space-y-2 md:space-y-0 relative">

        {/* Desktop navs hidden on small screens */}
        <nav className="hidden md:flex space-x-4 md:space-x-6 order-2 md:order-1">
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/catalog" className="hover:underline">Catalog</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
        </nav>
        {/* Title + Hamburger row (mobile: title left, hamburger top-right; desktop: title centered) */}
        <div className="w-full flex items-center justify-between md:justify-center order-1 md:order-2">
          <Link to="/" className="text-xl font-serif text-secondary">
            bat · sup · lok · gai
          </Link>

          {/* Hamburger button (mobile only) */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <nav className="hidden md:flex space-x-4 md:space-x-6 order-3">
          <Link to="/involve" className="hover:underline">Get Involved</Link>
          <Link to="/support" className="hover:underline">Explore</Link>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full right-4 mt-2 w-48 bg-primary text-secondary px-4 py-3 z-40 shadow-lg rounded-md">
            <div className="flex flex-col space-y-3 text-right">
              <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:underline">About Us</Link>
              <Link to="/catalog" onClick={() => setMenuOpen(false)} className="hover:underline">Catalog</Link>
              <Link to="/blog" onClick={() => setMenuOpen(false)} className="hover:underline">Blog</Link>
              <Link to="/involve" onClick={() => setMenuOpen(false)} className="hover:underline">Get Involved</Link>
              <Link to="/support" onClick={() => setMenuOpen(false)} className="hover:underline">Explore</Link>
            </div>
          </div>
        )}
      </header>

      {/* ROUTES */}
      <Routes>

        {/* HOMEPAGE */}
        <Route
          path="/"
          element={
            <>
              {/* HERO SECTION */}
              <section className="bg-primary text-secondary py-20 px-10 grid md:grid-cols-2 gap-12 items-start">
                <div className="max-w-xl space-y-4">
                  <h2 className="text-4xl sm:text-7xl md:text-6xl font-serif font-semibold text-secondary">
                    bat · sup · lok · gai
                  </h2>

                  <p className="text-xs uppercase tracking-widest opacity-80 text-secondary">
                    the romanization of 86th street in cantonese
                  </p>

                  <p className="text-base leading-relaxed pt-4 max-w-lg text-secondary">
                    86th street is Bensonhurst’s own little Chinatown, packed with just
                    about anything you can think of: delicious restaurants, supermarkets,
                    beauty salons, 99 cent stores, and more.
                  </p>

                  <Link
                    to="/catalog"
                    className="bg-cream text-primary text-sm font-semibold px-6 py-3 mt-4 rounded-md shadow-md hover:bg-white transition inline-block"
                  >
                    Explore businesses
                  </Link>
                </div>

                <img src={batsup} alt="batsup" />
              </section>

              {/* ANGLED SEPARATOR */}
              <div className="h-16 bg-primary shadow-lg -skew-y-2 -translate-y-16" />

              {/* THINGS TO DO */}
              <section className="px-10 py-16 -mt-20">
                <h3 className="text-3xl font-serif font-bold mb-12 text-primary">
                  Things To Do
                </h3>

                {/* Item 1 */}
                <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                  <div className="w-full h-64 bg-gray-300 rounded-lg shadow-md overflow-hidden">
                    <img
                      src={bk}
                      alt="Nai Brothers' Bakery"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-2xl font-serif font-semibold text-primary">
                      Nai Brothers' Bakery 蘇老闆
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Focuses on casual Chinese street-style food. The restaurant attracts customers looking for fast, flavorful meals.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="grid md:grid-cols-2 gap-12 items-start mb-16">

                  {/* LEFT SIDE — TEXT */}
                  <div className="space-y-4">
                    <h4 className="text-2xl font-serif font-semibold text-primary">
                      Ji Bei Chuan Noodles 季北川
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Known for hand-pulled noodles and bold northern Chinese flavors. The restaurant is casual and popular for quick, filling meals.
                    </p>

                    <div className="flex justify-start md:justify-end pt-4">
                      <Link to="/blog" className="bg-primary text-cream text-sm px-4 py-2 rounded-md shadow-sm hover:opacity-90">
                        Read More
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT SIDE — IMAGE */}
                  <div className="w-full h-64 rounded-lg shadow-md overflow-hidden">
                    <img
                      src={noodle}
                      alt="Ji Bei Chuan Noodles"
                      className="w-full h-full object-cover"
                    />
                  </div>

                </div>
              </section>

              {/* BUSINESS OWNER SPOTLIGHT */}
              <section className="px-10 py-20">
                <h3 className="text-3xl font-serif font-bold text-center mb-2 text-primary">
                  Business Owner Spotlight
                </h3>

                <p className="text-sm text-center mb-10 opacity-70 text-primary">
                  hear from the owners
                </p>

                <div className="grid md:grid-cols-3 gap-10 text-center">
                  {[
                    { label: "Restaurant", name: "HK Tea and Sushi", img: hk },
                    { label: "Beauty", name: "Pinky Salon", img: nail },
                    { label: "Cafe", name: "Next Move Cafe", img: bk },
                  ].map((item) => (
                    <div key={item.name} className="space-y-2">
                      
                      {/* IMAGE BLOCK */}
                      <div className="w-full h-48 rounded-lg shadow-md relative overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded-sm uppercase bg-primary text-cream">
                          {item.label}
                        </span>
                      </div>

                      {/* NAME */}
                      <p className="mt-2 font-semibold">{item.name}</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-12">
                  <Link
                    to="/blog"
                    className="bg-primary text-cream text-sm px-4 py-2 rounded-md shadow-sm hover:opacity-90"
                  >
                    Read More
                  </Link>
                </div>
              </section>
            </>
          }
        />

        {/* OTHER PAGES */}
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/involve" element={<Involve />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/support" element={<Support />} />

      </Routes>

      {/* GLOBAL FOOTER */}
      <footer className="bg-primary text-cream py-6 px-10 text-sm flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="font-serif text-xl">bat · sup · lok · gai</p>

        <div className="flex space-x-6 text-base">
          <Link to="/involve" className="hover:underline">Get Involved</Link>
          <Link to="/support" className="hover:underline">Explore</Link>
        </div>
      </footer>

    </div>
  );
}
