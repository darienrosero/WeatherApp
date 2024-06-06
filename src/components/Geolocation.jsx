import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../hooks/WeatherHook";

import selectUbication from '../assets/public/icons8-location-off-64.png';

const Geolocation = () => {

  const { setLocation } = useContext(WeatherContext);
  const [geolocation, setGeolocation] = useState({});


  function success(position) {
    setGeolocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  function error() {
    alert("Sorry, no position available.");
  }

  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  useEffect(() => {
    if ("latitude" in geolocation) {
      setLocation({
        lat: geolocation.latitude,
        lon: geolocation.longitude,
      });
    }
  }, [geolocation, setLocation]);

  return (

    <div className='w-8 flex items-center sm:mr-5'>
      <button className='bg-grey-R rounded-[100%] cursor-pointer'>
        <img src={selectUbication} alt="ubication" />
      </button>
    </div>

  )
}

export default Geolocation
