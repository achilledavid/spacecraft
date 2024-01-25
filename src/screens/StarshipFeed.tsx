import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, FlatList } from "react-native";
import { default as data } from "../../api/data.json";
import StarshipCard, { Starship } from "~/components/StarshipCard";

const starships = data.results as Starship[];

export default function StarshipFeed() {
    return (
        <>
            <SafeAreaView />
            <ScrollView style={styles.container}>
                <FlatList data={starships} renderItem={({ item }) => <StarshipCard item={item} />} keyExtractor={item => item.name} style={styles.list} ItemSeparatorComponent={() => <View style={{ height: 24 }} />} />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        padding: 32,
    }
});