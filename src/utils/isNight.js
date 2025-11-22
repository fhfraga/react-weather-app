export function isNight(weatherData) {
  if (!weatherData) return false;

  const now = Math.floor(Date.now() / 1000);
  return now < weatherData.sys.sunrise || now > weatherData.sys.sunset;
}
