import React, { useState } from "react";
import SidePanel from "./SidePanel";
import Map from "./Map";
import { useGeolocated } from "react-geolocated";

function HomePage() {
  const apikey = "RkXF6LLDJAR4VdPTjO7latfWKcEFWg-kkNemQ7IO5xc";
  const [userPosition, setUserPosition] = useState({ lat: 28.733255, lng: 77.109987 });
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
    React.useEffect(() => {
        if (!isGeolocationAvailable) {
          console.log('1');
          setUserPosition({ lat: 28.733255, lng: 77.109987 });
        } else if (!isGeolocationEnabled) {
          console.log('2');
          setUserPosition({ lat: 28.733255, lng: 77.109987 });
        } else if (coords) {
          console.log(3);
          setUserPosition({ lat: coords.latitude, lng: coords.longitude });
        }
      }, [coords, isGeolocationAvailable, isGeolocationEnabled]);
  //const userPosition = { lat: 28.733255, lng: 77.109987 };

  const restaurantList = [
    {
      name: "The Fish Market",
      location: { lat: 28.733, lng: 77.108 },
      contact: "12345678",
    },
    {
      name: "Bæjarins Beztu Pylsur",
      location: { lat: 28.734, lng: 77.1097 },
      contact: "12345678",
    },
    {
      name: "Grillmarkadurinn",
      location: { lat: 28.7356, lng: 77.119 },
      contact: "12345678",
    },
    {
      name: "Kol Restaurant",
      location: { lat: 28.733244, lng: 77.109 },
      contact: "12345678",
    },
  ];
  const [restaurantPosition, setRestaurantPosition] = useState(null);

  const onClickHandler = (location) => {
    setRestaurantPosition(location);
  };

  return (
    <div className="Home" style={styles.home}>
      <SidePanel list={restaurantList} onClickHandler={onClickHandler} />
      <Map
        apikey={apikey}
        userPosition={userPosition}
        restaurantPosition={restaurantPosition}
      />
    </div>
  );
}

export default HomePage;

const styles = {
  home: {
    display: "flex",
    flexDirection: "row",
  },
};
