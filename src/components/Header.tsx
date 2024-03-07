import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function Header({ title }: { title: string }) {
  return (
    <View style={styles.head}>
      <Text
        variant="displayMedium"
        style={styles.title}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    alignItems: "center",
    backgroundColor: "#6B4FAA",
    display: "flex",
    height: "30%",
    justifyContent: "center"
  },
  title: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase"
  }
});
