const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

export async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pt_br&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod !== 200) {
    throw new Error("Cidade não encontrada");
  }

  return data;
}
