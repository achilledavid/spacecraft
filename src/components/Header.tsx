import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function Header({ title }: { title: string }) {
    return (
        <View style={styles.head}>
            <Text variant="displayMedium" style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    head: {
        height: "30%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6B4FAA",
    },
    title: {
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
});