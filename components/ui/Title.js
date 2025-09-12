import { Text, StyleSheet } from "react-native";

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
    borderWidth: 2,
    borderColor: "white",
    borderWidth: 2,
    padding: 12,
  },
});
