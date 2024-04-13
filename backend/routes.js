
// routes.js

const express = require("express");
const router = express.Router();
const Event = require("./eventModel");
const multer = require("multer");
const path = require("path");



// Endpoint to add an event



router.post("/eventsAdd", async (req, res) => {
  try {
    const { eventName, organization, time, dayDate, venue, totalSeats, cost } =
      req.body;
    const newEvent = await Event.create({
      eventName,
      organization,
      time,
      dayDate,
      venue,
      totalSeats,
      cost,
    });
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint to fetch all events
router.get("/events", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to retrieve an event by ID
router.get("/events/:id", async (req, res) => {
  try {
    const eventId = req.params.id;
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to update the seats booked for an event
router.put("/events/:id", async (req, res) => {
  try {
    const eventId = req.params.id;
    const { ticketsBooked } = req.body;

    // Find the event by ID
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Update the number of tickets booked
    event.seatsBooked += ticketsBooked;
    await event.save();

    res.status(200).json({ message: "Tickets booked successfully", event });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
