import { use, useEffect, useRef, useState } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";

const storedIds = JSON.parse(localStorage.getItem("pickedPlaces")) || [];
const storedPlaces = storedIds.map((id) =>
    AVAILABLE_PLACES.find((place) => place.id === id)
  );

function App() {
  
  
  const modal = useRef();
  const selectedPlace = useRef();
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);


//   That’s technically fine (it’s a common pattern), but since React 18+ the linter interprets it as “synchronous state update inside an effect body,” which can cause unnecessary re-renders.
//  useEffect(() => {
//   const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
//   const storedPlaces = storedIds.map((id) => 
//     AVAILABLE_PLACES.find((place) => place.id === id)
//   );
//   setPickedPlaces(storedPlaces); 
// }, []);

// THIS WORKS BECAUSE SETSTATE IS DEFERRED - USING SETTIMEOUT
// useEffect(() => {
//   const storedIds = JSON.parse(localStorage.getItem("pickedPlaces")) || [];
//   const storedPlaces = storedIds.map((id) =>
//     AVAILABLE_PLACES.find((place) => place.id === id)
//   );

//   // Defer the state update
//   setTimeout(() => {
//     setPickedPlaces(storedPlaces);
//   }, 0);
// }, []);

// THIS WORKS BECAUSE SETSTATE IS DEFERRED - USING QUEUEMICROTASK = THIS IS MODERN SOLUTION
// useEffect(() => {
//   const storedIds = JSON.parse(localStorage.getItem("pickedPlaces")) || [];
//   const storedPlaces = storedIds.map((id) =>
//     AVAILABLE_PLACES.find((place) => place.id === id)
//   );

//   queueMicrotask(() => {
//     setPickedPlaces(storedPlaces);
//   });
// }, []);
 
// the BEST SOLUTION IS TO INITIALIZE STATE DURING USESTATE CALL 

  useEffect(() => {
    
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedIds = JSON.parse(localStorage.getItem("pickedPlaces")) || [];
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem("pickedPlaces", JSON.stringify([id, ...storedIds]));
    }
  }
  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    modal.current.close();

    const storedIds = JSON.parse(localStorage.getItem("pickedPlaces")) || [];
    localStorage.setItem(
      "pickedPlaces",
      JSON.stringify(
        storedIds.filter((id) => id !== selectedPlace.current)
      )
    );

  }

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by distance..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
