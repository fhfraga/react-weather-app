import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 25,
  },
  input: {
    width: "80%",
    height: 54,
    borderRadius: 12,
    paddingLeft: 15,
    backgroundColor: "rgba(255,255,255,0.15)",
    color: "#fff",
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    width: "80%",
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.3)",
    alignItems: "center",
    marginBottom: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  resultBox: {
    width: "80%",
    backgroundColor: "rgba(0,0,0,0.25)",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  cityName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  temp: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 5,
  },
  description: {
    fontSize: 20,
    color: "#eee",
    textTransform: "capitalize",
    marginTop: 5,
  },
});
