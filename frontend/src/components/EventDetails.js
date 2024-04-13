

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [seatsToBook, setSeatsToBook] = useState(1); // State to hold the number of seats to book

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

  const handleSeatsChange = (e) => {
    setSeatsToBook(parseInt(e.target.value)); // Convert input value to integer
  };

  const handleBooking = async () => {
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
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Event Details</h2>
      <p>Event Name: {event.eventName}</p>
      <p>Venue: {event.venue}</p>
      <p>Organization: {event.organization}</p>
      <p>Day: {event.dayDate}</p>
      <p>Total Seats: {event.totalSeats}</p>
      <p>Cost: {event.cost}</p>
      <p>Remaining Seats: {event.totalSeats - event.seatsBooked}</p>
      {/* Input field for number of seats to book */}
      <div>
        <label htmlFor="seatsToBook">Number of Seats to Book:</label>
        <input
          type="number"
          id="seatsToBook"
          name="seatsToBook"
          value={seatsToBook}
          onChange={handleSeatsChange}
          min="1" // Minimum value should be 1
          max={event.totalSeats} // Maximum value should be totalSeats
        />
      </div>

      {/* Button to book tickets */}
      <button onClick={handleBooking}>Book Tickets</button>
    </div>
  );
}

export default EventDetails;
