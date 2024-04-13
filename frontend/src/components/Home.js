import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Home.css"; // Update import to match the new component name

function Home() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:3000/events");
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  const handleBook = async (userId) => {
    try {
      // Make API call to add deposit for the user

      // Navigate to a new page after adding the deposit
      navigate(`/events/${userId}`);
    } catch (error) {
      console.error("Error adding deposit:", error);
    }
  };

  return (
    <div className="home">
      <header className="home-header">
        <h1 className="home-title">Takatak</h1>
        <nav className="home-nav">
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
        <section className="sustainable-platform">
          <h2>SUSTAINABLE PLATFORM</h2>
          <div>
            {events.map((event) => (
              <div key={event._id}>
                {/* <img
                  src={`${event.imageUrl}`}
                  alt={event.eventName}
                /> */}
                {event.imageUrl && (
                  <img
                    src={`${event.imageUrl}`}
                    alt="Event"
                    style={{ maxWidth: "30%", height: "30%" }}
                  />
                )}
                <p>Venue: {event.venue}</p>
                <p>Organization: {event.organization}</p>
                <p>Day: {event.dayDate}</p>
                <p>Total Seats: {event.totalSeats}</p>
                <p>Cost: {event.cost}</p>
                <p>Remaining Seats:{event.totalSeats - event.seatsBooked}</p>
                <button onClick={() => handleBook(event._id)}>Book</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
