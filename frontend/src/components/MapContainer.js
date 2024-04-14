// import React, { useState, useEffect } from "react";
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

// const MapContainer = ({ google }) => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/events");
//       const data = await response.json();
//       setEvents(data); // Assuming data is an array of event objects with location information
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   const getLocationCoordinates = async (locationName) => {
//     try {
//       const response = await fetch(
//         `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
//           locationName
//         )}&key=YOUR_GEOCODING_API_KEY`
//       );
//       const data = await response.json();
//       if (data.results && data.results.length > 0) {
//         const { lat, lng } = data.results[0].geometry.location;
//         return { lat, lng };
//       }
//     } catch (error) {
//       console.error("Error fetching coordinates:", error);
//     }
//     return null;
//   };

//   return (
//     <Map
//       google={google}
//       zoom={10}
//       style={{ width: "100%", height: "400px" }}
//       initialCenter={{ lat: 37.774929, lng: -122.419416 }} // Default initial center
//     >
//       {events.map(async (event) => {
//         const { venue} = event; // Assuming location name is stored in your event objects
//         const { lat, lng } = await getLocationCoordinates(venue);
//         if (lat && lng) {
//           return (
//             <Marker
//               key={event._id} // Assuming each event has a unique ID
//               position={{ lat, lng }}
//               title={event.eventName} // Optional: Display event name as marker title
//             />
//           );
//         } else {
//           return null;
//         }
//       })}
//     </Map>
//   );
// };

// export default GoogleApiWrapper({
//   apiKey: "YOUR_API_KEY",
// })(MapContainer);

// import React, { useEffect } from "react";
// import { Map, View } from "ol";
// import TileLayer from "ol/layer/Tile";
// import OSM from "ol/source/OSM";
// import { fromLonLat } from "ol/proj";

// const MapContainer = () => {
//   useEffect(() => {
//     // Create an OpenLayers map when the component mounts
//     const map = new Map({
//       target: "map",
//       layers: [
//         new TileLayer({
//           source: new OSM(),
//         }),
//       ],
//       view: new View({
//         center: fromLonLat([-122.419416, 37.774929]), // Default initial center
//         zoom: 10,
//       }),
//     });

//     return () => {
//       // Cleanup function to remove the OpenLayers map when the component unmounts
//       map.setTarget(null);
//     };
//   }, []);

//   return <div id="map" style={{ width: "100%", height: "100vh" }}></div>; // Set height to 100vh to fill the entire screen
// };

// export default MapContainer;
import React, { useEffect } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Icon, Style } from "ol/style";
import VectorSource from "ol/source/Vector";
import { Vector as VectorLayer } from "ol/layer";

const MapContainer = () => {
  useEffect(() => {
    // Create an OpenLayers map when the component mounts
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([78.9629, 20.5937]), // Centered on India
        zoom: 5, // Zoom out to see India on the map
      }),
    });

    // Define landmark coordinates
    const landmarks = [
      { name: "Chennai", coordinates: [80.2707, 13.0827] }, 
      { name: "Bengaluru", coordinates: [77.5946, 12.9716] },
      // Add more landmarks as needed
    ];

    // Create a vector layer to hold the landmarks
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    map.addLayer(vectorLayer);

    // Add landmarks as features to the vector layer
    landmarks.forEach((landmark) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat(landmark.coordinates)),
      });
      vectorSource.addFeature(feature);

      // Create a style for the landmark
      feature.setStyle(
        new Style({
          image: new Icon({
            src: "https://cdn.mapmarker.io/api/v1/pin?text=L&size=50&hoffset=1", // Customize the marker icon as needed
          }),
        })
      );
    });

    return () => {
      // Cleanup function to remove the OpenLayers map when the component unmounts
      map.setTarget(null);
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "100vh" }}></div>; // Set height to 100vh to fill the entire screen
};

export default MapContainer;
