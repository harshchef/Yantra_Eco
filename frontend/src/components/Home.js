import React from "react";
import "./Home.css"; // Update import to match the new component name

function Home() {
  // Rename the function to Home
  return (
    <div className="home">
      {" "}
      {/* Update className */}
      <header className="home-header">
        {" "}
        {/* Update className */}
        <h1 className="home-title">Takatak</h1> {/* Update className */}
        <nav className="home-nav">
          {" "}
          {/* Update className */}
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/design">Design</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
          </ul>
        </nav>
        <div className="search-container">
          <input
            type="text"
            placeholder="Find Event"
            className="search-input"
          />
        </div>
      </header>
      <main className="home-main">
        {" "}
        {/* Update className */}
        <section className="sustainable-platform">
          <h2>SUSTAINABLE PLATFORM</h2>
          {/* Content goes here */}
        </section>
      </main>
    </div>
  );
}

export default Home; // Export Home component
