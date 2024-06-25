import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js"

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlace, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchPlaces = async () => {
      setIsLoading(true);

      try {
        const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          setAvailablePlaces(
            sortPlacesByDistance(
              places,
              position.coords.latitude,
              position.coords.longitude
            )
          );
          setIsLoading(false);
        });
      } catch (error) {
        setError({
          message: error.message || "Could not fetch places, check url",
        });
        setIsLoading(false);
      }
      
    };

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occured!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlace}
      isLoading={isLoading}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
