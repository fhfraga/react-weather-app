import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { fetchWeather } from "../services/weatherService";
import { getWeatherVisuals } from "../utils/getWeatherVisuals";

import WeatherCard from "../components/WeatherCard";
import styles from "../styles/homeStyles";

export default function HomeScreen() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getWeather() {
    if (!city) return;

    setLoading(true);
    setWeatherData(null);

    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (error) {
      alert(error.message);
    }

    setLoading(false);
  }

  const visuals = getWeatherVisuals(weatherData);

  return (
    <LinearGradient colors={visuals.gradient} style={styles.container}>
      <Text style={styles.title}>Previsão do Tempo</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a cidade..."
        placeholderTextColor="#ccc"
        value={city}
        onChangeText={setCity}
      />

      <TouchableOpacity style={styles.button} onPress={getWeather}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#fff" />}

      {weatherData && (
        <WeatherCard weatherData={weatherData} visuals={visuals} styles={styles} />
      )}
    </LinearGradient>
  );
}
