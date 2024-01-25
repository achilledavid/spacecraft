import type { ReactNode } from "react";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Offline } from "~/components/Offline";

interface ScreenContainerProps {
    title: string;
    children?: ReactNode;
    withSeparatorFooter?: boolean;
}

export const ScreenContainer = ({
    title,
    children,
    withSeparatorFooter = false,
}: ScreenContainerProps) => {
    return (
        <ScrollView nestedScrollEnabled={true}>
            <View style={styles.container}>
                <Offline />
                <Text variant="headlineMedium" style={styles.title}>{title}</Text>
                {children}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 32
    },
    title: {
        fontWeight: "bold",
        marginBottom: 24,
    }
});