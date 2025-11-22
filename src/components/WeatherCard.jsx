import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function WeatherCard({ weatherData, visuals, styles }) {
  return (
    <View style={styles.resultBox}>
      <Text style={styles.cityName}>
        {weatherData.name}, {weatherData.sys.country}
      </Text>

      <MaterialCommunityIcons
        name={visuals.icon}
        size={90}
        color="#fff"
        style={{ marginVertical: 10 }}
      />

      <Text style={styles.temp}>
        {Math.round(weatherData.main.temp)}°C
      </Text>

      <Text style={styles.description}>
        {weatherData.weather[0].description}
      </Text>
    </View>
  );
}
