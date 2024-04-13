// // AddEventForm.js


import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import "./AddEventForm.css"; // Import CSS file
import marathon from './Marathon.jpg';
import sport from './Sports.jpg';
import planting from './PlantationTeamBuilding.jpeg';
import charity from './CharityTeamBuilding.jpg';
import cheer from './PeopleCheering.jpg';


function AddEventForm() {
  
  // const observer = new IntersectionObserver(entries => {
  //   // Loop over the entries
  //   entries.forEach(entry => {
  //     // If the element is visible
  //     if (entry.isIntersecting) {
  //       // Add the animation class
  //       entry.target.classList.add('slideInLeft');
  //     }
  //   });
  // });
  
  // observer.observe(document.querySelector('.image-container'));
  
  const [formData, setFormData] = useState({
    eventName: "",
    organization: "",
  // description:"",
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
      // formDataToSend.append("description", formData.description);
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
    <div className="container">
      <h2>Add Event</h2>
      <h3>If you are willing to host an event then contact us.</h3>
      <h3>Fill in the details of the event and let the world know about it.</h3>
      <div className="row">
      <div className="image-container" style={{float: "right"}}>
        <img className="image" src={marathon} alt="Image1"/>
        <img className="image" src={sport} alt="Image2"/>
        <img className="image" src={planting} alt="Image3"/>
      </div>
      <form className= "form-container" onSubmit={handleSubmit}>
      <p>***All fields are required***</p>
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
        {/* <div className="form-group">
          <label>Description:</label>
          <textarea style={{width:"800px"}}
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            required
          />
        </div> */}
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
      <div className="row2">
        <img className="image-seperate" src={cheer} alt="Image5" style={{marginLeft:"50px"}}/>
        <img className="image-seperate" src={charity} alt="Image5"/>
      </div>
    </div>
  );
}

export default AddEventForm;