import React from "react";
import Card from "./Card"; // Assuming Card component is in the same directory
// import eventImage1 from "../assets/event1.jpg"; // Sample image for event cards
// import eventImage2 from "../assets/event2.jpg"; // Another sample image
// import eventImage3 from "../assets/event3.jpg"; // Another sample image
// import eventImage4 from "../assets/event4.jpg"; // Another sample image
// import eventImage5 from "../assets/event5.jpg"; // Another sample image
// import eventImage6 from "../assets/event6.jpg"; // Another sample image
import "../Card.css";
const EventPage = () => {
  return (
    <div id="events-section" className="event-page-container">
      <h1 className="text-center text-4xl mb-8">Upcoming Events</h1>
      <div className="event-cards-container">
        <Card
          frontImage="https://via.placeholder.com/240x294/bcff04"
          backImage="https://via.placeholder.com/240x294/bcff04"
        />
        <Card
          frontImage="https://via.placeholder.com/240x294/bcff04"
          backImage="https://via.placeholder.com/240x294/bcff04"
        />
        <Card
          frontImage="https://via.placeholder.com/240x294/bcff04"
          backImage="https://via.placeholder.com/240x294/bcff04"
        />
        <Card
          frontImage="https://via.placeholder.com/240x294/bcff04"
          backImage="https://via.placeholder.com/240x294/bcff04"
        />
        <Card
          frontImage="https://via.placeholder.com/240x294/bcff04"
          backImage="https://via.placeholder.com/240x294/bcff04"
        />
        <Card
          frontImage="https://via.placeholder.com/240x294/bcff04"
          backImage="https://via.placeholder.com/240x294/bcff04"
        />
      </div>
    </div>
  );
};

export default EventPage;
