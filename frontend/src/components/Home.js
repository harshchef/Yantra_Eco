// import { Link, useNavigate } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import "./Home.css"; // Update import to match the new component name

// function Home() {
//   const [events, setEvents] = useState([]);
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");
//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/events");
//       const data = await response.json();
//       setEvents(data);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value); // Set the searchQuery state
//   };

//   const filteredEvents = events.filter((event) =>
//     event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   const handleBook = async (eventId) => {
//     try {
//       // Make API call to handle booking

//       // Navigate to a new page after booking
//       navigate(`/events/${eventId}`); // Corrected the string interpolation
//     } catch (error) {
//       console.error("Error booking event:", error);
//     }
//   };

//   return (
//     <div className="home">
//       <header className="home-header">
//         <h1 className="home-title">Takatak</h1>
//         <nav className="home-nav">
//           <ul>
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a href="/events">Events</a>
//             </li>
//             <li>
//               <a href="/design">Design</a>
//             </li>
//             <li>
//               <a href="/about-us">About Us</a>
//             </li>
//           </ul>
//         </nav>
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Find Event"
//             className="search-input"
//             value={searchQuery}
//             onChange={handleSearchChange}
//           />
//         </div>
//       </header>
//       <div></div>
//       <main className="home-main">
//         <section className="sustainable-platform">
//           <div className="homeInitial">
//             <div className="initialText">
//               <h2>SUSTAINABLE PLATFORM</h2>
//             </div>
//           </div>
//           {filteredEvents.map((event) => (
//             <div key={event._id} className="event-container">
//               {event.imageUrl && (
//                 <img
//                   src={`${event.imageUrl}`}
//                   alt="Event"
//                   style={{
//                     maxWidth: "30%",
//                     height: "30%",
//                     float: "left",
//                     paddingTop: "25%",
//                     marginLeft: "auto",
//                     borderRadius: "5%",
//                     // borderTopLeftRadius:"5%"
//                   }}
//                 />
//               )}
//               <div className="event-details">
//                 {/* Wrap event details in a div */}
//                 <h1>{event.eventName}</h1>
//                 <p style={{ fontSize: "20px" }}>Venue: {event.venue}</p>
//                 <p style={{ fontSize: "20px" }}>
//                   Organization: {event.organization}
//                 </p>
//                 <p style={{ fontSize: "20px" }}>Day: {event.dayDate}</p>
//                 <p style={{ fontSize: "20px" }}>
//                   Total Seats: {event.totalSeats}
//                 </p>
//                 <p style={{ fontSize: "20px" }}>Cost: {event.cost}</p>
//                 <p style={{ fontSize: "20px" }}>
//                   Remaining Seats:{event.totalSeats - event.seatsBooked}
//                 </p>
//                 <button onClick={() => handleBook(event._id)}>Book</button>
//               </div>
//               <div style={{ clear: "both" }}></div> {/* Clear the float */}
//             </div>
//           ))}
//         </section>
//       </main>
//     </div>
//   );
// }

// export default Home;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:3000/events");
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      setEvents(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching events:", error);
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleBook = async (eventId) => {
    try {
      navigate(`/events/${eventId}`);
    } catch (error) {
      console.error("Error booking event:", error);
    }
  };

  // Filter events based on search query
  const filteredEvents = events.filter((event) =>
    event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      {loading ? (
        <div>Loading...</div>
      ) : (
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
                      paddingTop: "25%",
                      marginLeft: "auto",
                      borderRadius: "5%",
                    }}
                  />
                )}
                <div className="event-details">
                  <h1>{event.eventName}</h1>
                  <div
                    style={{
                      width: "60%",
                      textAlign: "left",
                      paddingLeft: "25%",
                    }}
                  >
                    <p style={{ fontSize: "20px", color: "grey" }}>
                      <span
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                          color: "black",
                        }}
                      >
                        VENUE
                      </span>{" "}
                      {event.venue}
                    </p>
                    <p style={{ fontSize: "20px", color: "grey" }}>
                      <span
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                          color: "black",
                        }}
                      >
                        ORGANIZATION
                      </span>{" "}
                      {event.organization}
                    </p>
                    <p style={{ fontSize: "20px", color: "grey" }}>
                      <span
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                          color: "black",
                        }}
                      >
                        DAY
                      </span>{" "}
                      {event.dayDate}
                    </p>
                    <p style={{ fontSize: "20px", color: "grey" }}>
                      <span
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                          color: "black",
                        }}
                      >
                        TOTAL SEATS
                      </span>{" "}
                      {event.totalSeats}
                    </p>
                    <p style={{ fontSize: "20px", color: "grey" }}>
                      <span
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                          color: "black",
                        }}
                      >
                        COST
                      </span>{" "}
                      {event.cost}
                    </p>
                    <p style={{ fontSize: "20px", color: "grey" }}>
                      <span
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                          color: "black",
                        }}
                      >
                        REMAINING SEATS
                      </span>{" "}
                      {event.totalSeats - event.seatsBooked}
                    </p>
                  </div>
                  <button onClick={() => handleBook(event._id)}>BOOK</button>
                </div>
              </div>
            ))}
          </section>
        </main>
      )}
    </div>
  );
}

export default Home;


