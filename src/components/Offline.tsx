import { StyleSheet, Text, View } from "react-native";
import { useIsConnected } from "react-native-offline";
import { ActivityIndicator } from "react-native-paper";

export const Offline = () => {
  const isConnected = useIsConnected();

  if (isConnected || isConnected === null) return null;
  else
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={true}
          color="#991B1B"
        />
        <Text style={styles.message}>Vous êtes hors ligne.</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FEE2E2",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    gap: 12,
    left: 0,
    marginHorizontal: 32,
    padding: 12,
    position: "absolute",
    right: 0,
    top: 55,
    zIndex: 1
  },
  message: {
    color: "#991B1B",
    fontWeight: "500"
  }
});
