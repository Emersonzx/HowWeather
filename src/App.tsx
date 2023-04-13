import React, { useState, useRef } from 'react';
import { Container, Image, Title, Form, Input, Button, WeatherContainer, CityName, WeatherDescription, WeatherInfo, WindInfo } from './appstyles';
import { WeatherData } from './types';
import img from './img.svg'


const WeatherApp: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const cityRef = useRef<HTMLInputElement>(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  const getWeatherData = async (city: string) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data: WeatherData = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const city = cityRef.current?.value;
    if (city) {
      getWeatherData(city);
    }
  };

  return (
    <Container>
      <Image src={img} alt="illustration" />
      <Title>Check out the weather</Title>
      <Form onSubmit={handleSubmit}>
        <Input type="text" ref={cityRef} placeholder="Enter city name" />
        <Button type="submit">Search</Button>
      </Form>
      {weatherData && (
        <WeatherContainer>
          <CityName>
            {weatherData.name}, {weatherData.sys?.country}
          </CityName>
          {weatherData.weather && weatherData.weather.length > 0 && (
            <WeatherDescription>{weatherData.weather[0].description}</WeatherDescription>
          )}
          {weatherData.main && (
            <WeatherInfo>
              <p>Temperature: {weatherData.main.temp} &deg;C</p>
              <p>Feels like: {weatherData.main.feels_like} &deg;C</p>
              <p>Humidity: {weatherData.main.humidity}%</p>
            </WeatherInfo>
          )}
          {weatherData.wind && (
            <WindInfo><p>Wind speed: {weatherData.wind.speed} m/s</p></WindInfo>
          )}
        </WeatherContainer>
      )}
    </Container>
  );
};





export default WeatherApp
