import { gradientByWeather } from "../constants/gradients";
import { weatherIcons } from "../constants/weatherIcons";
import { isNight } from "./isNight";

export function getWeatherVisuals(weatherData) {
  if (!weatherData) {
    return {
      gradient: gradientByWeather.Default,
      icon: "weather-cloudy",
    };
  }

  const main = weatherData.weather[0].main;
  const night = isNight(weatherData);

  let iconKey = main;

  if (main === "Clear" && night) {
    iconKey = "ClearNight";
  }

  return {
    gradient: gradientByWeather[iconKey] || gradientByWeather.Default,
    icon: weatherIcons[iconKey] || "weather-cloudy",
  };
}
