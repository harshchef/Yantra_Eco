
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// import "./EventDetails.css";

// function EventDetails() {
//   const { id } = useParams();
//   const [event, setEvent] = useState(null);
//   const [seatsToBook, setSeatsToBook] = useState(1); // State to hold the number of seats to book
//   const [errorMessage, setErrorMessage] = useState(""); // State to hold error message

//   useEffect(() => {
//     fetchEvent();
//   }, []);

//   const fetchEvent = async () => {
//     try {
//       const response = await fetch(`http://localhost:3000/events/${id}`);
//       const data = await response.json();
//       setEvent(data);
//     } catch (error) {
//       console.error("Error fetching event details:", error);
//     }
//   };
//   const formatEventDate = (dateString) => {
//     const eventDate = new Date(dateString);
//     const formattedDate = eventDate.toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "2-digit",
//       year: "numeric",
//     });
//     return formattedDate;
//   };
//   const handleSeatsChange = (e) => {
//     setSeatsToBook(parseInt(e.target.value)); // Convert input value to integer
//     setErrorMessage(""); // Clear error message when input changes
//   };

//   const handleBooking = async () => {
//     const remainingSeats = event.totalSeats - event.seatsBooked;
//     if (seatsToBook > remainingSeats) {
//       setErrorMessage("Cannot book more seats than available");
//     } else {
//       try {
//         const response = await fetch(`http://localhost:3000/events/${id}`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ ticketsBooked: seatsToBook }),
//         });
//         const data = await response.json();
//         console.log(data);
//         // Update the event state after booking tickets
//         setEvent(data.event);
//         // You can add logic to handle successful booking here, e.g., show a success message
//       } catch (error) {
//         console.error("Error booking tickets:", error);
//       }
//     }
//   };

//   if (!event) {
//     return <div>Loading...</div>;
//   }

//   const remainingSeats = event.totalSeats - event.seatsBooked;

//   return (
//     <div className="wuxi-ka-main-container">
//       <div classNamw="bg"></div>
//       <div className="bg bg2"></div>
//       <div className="bg bg3"></div>
//       <h2>Event Details</h2>
//       <div className="row" style={{ height: "80vh", align: "center" }}>
//         <div className="wuxi-ka-image-container" style={{ float: "right" }}>
//           <img
//             className="wuxi-ka-image"
//             src={`${event.imageUrl}`}
//             alt="Event"
//           />
//         </div>

//         <div className="wuxi-ka-text-container" style={{ float: "left" }}>
//           <p className="event-name">Event Name: {event.eventName}</p>
//           <p className="venue">Venue: {event.venue}</p>
//           <p className="organization">Organization: {event.organization}</p>
//           <p className="day">Day: {formatEventDate(event.dayDate)}</p>
//           <p className="total-seats">Total Seats: {event.totalSeats}</p>
//           <p className="cost">Cost: {event.cost}</p>
//           <p className="remaining-seats">Remaining Seats: {remainingSeats}</p>
//           {errorMessage && <p className="error-message">{errorMessage}</p>}
//         </div>
//       </div>
//       <div className="row2">
//         <label htmlFor="seatsToBook">Number of Seats to Book: </label>
//         <input
//           style={{ textAlign: "center", fontSize: "30px", width: "100px" }}
//           type="number"
//           id="seatsToBook"
//           name="seatsToBook"
//           value={seatsToBook}
//           onChange={handleSeatsChange}
//           min="1" // Minimum value should be 1
//           max={event.totalSeats} // Maximum value should be totalSeats
//         />
//       </div>
//       <div className="row3">
//         <button
//           onClick={handleBooking}
//           style={{ fontSize: "20px", marginTop: "30px" }}
//           disabled={remainingSeats === 0} // Disable button when remaining seats are 0
//         >
//           Book Tickets
//         </button>
//       </div>
//     </div>
//   );
// }

// export default EventDetails;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./EventDetails.css";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [seatsToBook, setSeatsToBook] = useState(1); // State to hold the number of seats to book
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error message

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      const response = await fetch(`http://localhost:3000/events/${id}`);
      const data = await response.json();
      setEvent(data);
    } catch (error) {
      console.error("Error fetching event details:", error);
    }
  };
    const formatEventDate = (dateString) => {
      const eventDate = new Date(dateString);
      const formattedDate = eventDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      return formattedDate;
    };
  const handleSeatsChange = (e) => {
    setSeatsToBook(parseInt(e.target.value)); // Convert input value to integer
    setErrorMessage(""); // Clear error message when input changes
  };

  const handleBooking = async () => {
    const remainingSeats = event.totalSeats - event.seatsBooked;
    if (seatsToBook > remainingSeats) {
      setErrorMessage("Cannot book more seats than available");
    } else {
      try {
        const response = await fetch(`http://localhost:3000/events/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ticketsBooked: seatsToBook }),
        });
        const data = await response.json();
        console.log(data);
        // Update the event state after booking tickets
        setEvent(data.event);
        // You can add logic to handle successful booking here, e.g., show a success message
      } catch (error) {
        console.error("Error booking tickets:", error);
      }
    }
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  const remainingSeats = event.totalSeats - event.seatsBooked;

  return (
    <div className="wuxi-ka-main-container">
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
        <div className="empty-div"></div>
      </header>
      <div classNamw="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <h2 className="event-name">{event.eventName}</h2>
      <div className="row" style={{ height: "80vh", align: "center" }}>
        <div className="wuxi-ka-image-container" style={{ float: "right" }}>
          <img
            className="wuxi-ka-image"
            src={`${event.imageUrl}`}
            alt="Event"
          />
        </div>

        <div className="wuxi-ka-text-container" style={{ float: "left" }}>
          {/* <p className="event-name">Event Name: {event.eventName}</p> */}
          <p className="venue">Venue: {event.venue}</p>
          <p className="organization">Organization: {event.organization}</p>
          <p className="day">Day: {formatEventDate(  event.dayDate)}</p>
          <p className="total-seats">Total Seats: {event.totalSeats}</p>
          <p className="cost">Cost: {event.cost}</p>
          <p className="remaining-seats">Remaining Seats: {remainingSeats}</p>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
      <div className="row2">
        <label htmlFor="seatsToBook" style={{ marginRight: "20px" }}>
          Number of Seats to Book:{" "}
        </label>
        <input
          style={{ fontSize: "30px", width: "100px" }}
          type="number"
          id="seatsToBook"
          name="seatsToBook"
          value={seatsToBook}
          onChange={handleSeatsChange}
          min="1" // Minimum value should be 1
          max={event.totalSeats} // Maximum value should be totalSeats
        />
      </div>
      <div className="row3">
        <button
          onClick={handleBooking}
          style={{ fontSize: "20px", marginTop: "30px" }}
          disabled={remainingSeats === 0} // Disable button when remaining seats are 0
        >
          Book Tickets
        </button>
      </div>
    </div>
  );
}

export default EventDetails;
