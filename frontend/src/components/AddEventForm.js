// // AddEventForm.js

// import React, { useState } from "react";
// import axios from "axios";
// import "./AddEventForm.css"; // Import CSS file

// function AddEventForm() {
//   const [formData, setFormData] = useState({
//     eventName: "",
//     organization: "",
//     time: "",
//     dayDate: "",
//     venue: "",
//     totalSeats: 0,
//     cost: 0,
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/eventsAdd",
//         formData
//       );
//       console.log("Event added:", response.data);
//       alert("Event added successfully!");
//     } catch (error) {
//       console.error("Error adding event:", error.message);
//       alert("Error adding event");
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Add Event</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Event Name:</label>
//           <input
//             type="text"
//             name="eventName"
//             value={formData.eventName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Organization:</label>
//           <input
//             type="text"
//             name="organization"
//             value={formData.organization}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Time:</label>
//           <input
//             type="text"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Date:</label>
//           <input
//             type="date"
//             name="dayDate"
//             value={formData.dayDate}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Venue:</label>
//           <input
//             type="text"
//             name="venue"
//             value={formData.venue}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Total Seats:</label>
//           <input
//             type="number"
//             name="totalSeats"
//             value={formData.totalSeats}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Cost:</label>
//           <input
//             type="number"
//             name="cost"
//             value={formData.cost}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Add Event</button>
//       </form>
//     </div>
//   );
// }

// export default AddEventForm;
import React, { useState } from "react";
import axios from "axios";
import "./AddEventForm.css"; // Import CSS file

function AddEventForm() {
  const [formData, setFormData] = useState({
    eventName: "",
    organization: "",
    time: "",
    dayDate: "",
    venue: "",
    totalSeats: 0,
    cost: 0,
    image: null, // New state for storing the selected image file
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      // If the input is for image, update the state with the selected file
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      // Otherwise, update the state with the input value
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a FormData object to send form data including files
      const formDataToSend = new FormData();
      formDataToSend.append("eventName", formData.eventName);
      formDataToSend.append("organization", formData.organization);
      formDataToSend.append("time", formData.time);
      formDataToSend.append("dayDate", formData.dayDate);
      formDataToSend.append("venue", formData.venue);
      formDataToSend.append("totalSeats", formData.totalSeats);
      formDataToSend.append("cost", formData.cost);
      formDataToSend.append("image", formData.image); // Append the image file

      // Send POST request with FormData
      const response = await axios.post(
        "http://localhost:3000/eventsAdd",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type to multipart form data
          },
        }
      );
      console.log("Event added:", response.data);
      alert("Event added successfully!");
    } catch (error) {
      console.error("Error adding event:", error.message);
      alert("Error adding event");
    }
  };

  return (
    <div className="form-container">
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Name:</label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Organization:</label>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="dayDate"
            value={formData.dayDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Venue:</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Total Seats:</label>
          <input
            type="number"
            name="totalSeats"
            value={formData.totalSeats}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Cost:</label>
          <input
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            type="file" // Set input type to file for selecting image
            name="image"
            onChange={handleChange}
            accept="image/*" // Allow only image files
            required
          />
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default AddEventForm;
