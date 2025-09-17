import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    textAlign: "center",
    color: "white",
    borderColor: "white",
    // borderWidth: Platform.OS === "android" ? 0 : 2,
    borderWidth: Platform.select({ ios: 0, android: 0.5 }),
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
