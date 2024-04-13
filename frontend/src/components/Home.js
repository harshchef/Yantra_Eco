import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Home.css"; // Update import to match the new component name

function Home() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
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
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Set the searchQuery state
  };

  const filteredEvents = events.filter((event) =>
    event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleBook = async (eventId) => {
    try {
      // Make API call to handle booking

      // Navigate to a new page after booking
      navigate(`/events/${eventId}`); // Corrected the string interpolation
    } catch (error) {
      console.error("Error booking event:", error);
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
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </header>
      <div></div>
      <main className="home-main">
        <section className="sustainable-platform">
          <div className="homeInitial">
            <div className="initialText">
              <h2>SUSTAINABLE PLATFORM</h2>
            </div>
          </div>
          {filteredEvents.map((event) => (
            <div key={event._id} className="event-container">
              {event.imageUrl && (
                <img
                  src={`${event.imageUrl}`}
                  alt="Event"
                  style={{
                    maxWidth: "30%",
                    height: "30%",
                    float: "left",
                    paddingTop: "15%",
                    marginLeft: "auto",
                  }}
                />
              )}
              <div className="event-details">
                {/* Wrap event details in a div */}
                <h3>{event.eventName}</h3>
                <p>Venue: {event.venue}</p>
                <p>Organization: {event.organization}</p>
                <p>Day: {event.dayDate}</p>
                <p>Total Seats: {event.totalSeats}</p>
                <p>Cost: {event.cost}</p>
                <p>Remaining Seats:{event.totalSeats - event.seatsBooked}</p>
                <button onClick={() => handleBook(event._id)}>Book</button>
              </div>
              <div style={{ clear: "both" }}></div> {/* Clear the float */}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Home;
