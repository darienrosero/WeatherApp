import React, { createContext, useState, useEffect, useCallback } from 'react';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState(null); 
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = '7b96eb3c96a6d6018572464977e2e33b';

    const fetchWeatherData = useCallback(async (lat, lon) => {
        setLoading(true);
        setError(null);
        try {
            const [forecastResponse, weatherResponse] = await Promise.all([
                fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`),
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
            ]);

            if (!forecastResponse.ok || !weatherResponse.ok) {
                throw new Error('Network response was not ok');
            }

            const forecastData = await forecastResponse.json();
            const weatherData = await weatherResponse.json();

            setWeatherData(forecastData);
            setCity(weatherData.name);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [API_KEY]);

    const getLocation = useCallback(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error('Error getting location:', error);
                    setError('Error getting location. Please enable location services.');
                    setLoading(false);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
            setError('Geolocation is not supported by this browser.');
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getLocation();
    }, [getLocation]);

    useEffect(() => {
        if (location) {
            fetchWeatherData(location.lat, location.lon);
        }
    }, [location, fetchWeatherData]);

    return (
        <WeatherContext.Provider
            value={{
                weatherData,
                city,
                getLocation,
                setLocation,
                loading,
                error,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export { WeatherProvider, WeatherContext };
