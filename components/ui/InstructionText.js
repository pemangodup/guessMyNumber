import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.cardText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  cardText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
