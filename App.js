import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [number, setNumber] = useState();

  function hehe(num) {
    setNumber(num);
  }
  let screen = <StartGameScreen onPickNumber={hehe} />;
  if (number) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient
      colors={["#56054aff", "#aea505ff"]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
