const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
   // required: true,
  },
  time: {
    type: String,
   // required: true,
  },
  dayDate: {
    type: Date,
   // required: true,
  },
  venue: {
    type: String,
  //  required: true,
  },
  totalSeats: {
    type: Number,
  //  required: true,
  },
  seatsBooked: {
    type: Number,
    default: 0,
  },
  cost: {
    type: Number,
   // required: true,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  imageUrl: {
    type: String, // Assuming image URL is stored as a string
    //required: true,
  },
  testimonials: [
    {
      name: String,
      comment: String,
    },
  ],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
