const mongoose = require("mongoose");
const Event = require("./eventModel"); // Assuming the schema is defined in eventModel.js

// Connect to MongoDB Atlas
mongoose
  .connect(
    "mongodb+srv://adityakumar0718:harsh1234@cluster0.fecwzd4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err.message);
  });

// //Example usage
// async function createEvent() {
//   try {
//     const newEvent = await Event.create({
//       eventName: "Example Event",
//       organization: "Example Organization",
//       time: "12:00 PM",
//       dayDate: new Date("2024-04-15"),
//       venue: "Example Venue",
//       totalSeats: 100,
//       cost: 50,
//     });
//     console.log("Event created:", newEvent);
//   } catch (error) {
//     console.error("Error creating event:", error.message);
//   }
// }

// createEvent();
