import React, { useEffect } from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import { Text } from "react-native-paper";
import { ScreenContainer } from "~/components/ScreenContainer";
import StarshipCard, { Starship } from "~/components/StarshipCard";
import { useStarships } from "~/hooks/useStarships";

export default function StarshipFeed() {
    const [starships, setStarships] = React.useState<Starship[]>([]);
    const { data, isError, isLoading } = useStarships();

    useEffect(() => {
        if (data) setStarships(data.results);
    }, [data]);

    return (
        <SafeAreaView>
            <ScreenContainer title="Liste des vaisseaux">
                {
                    isLoading || starships.length <= 0 ?
                        <LoadingLayout /> :
                        isError ?
                            <ErrorLayout /> :
                            <FlatList data={starships}
                                renderItem={({ item }) => <StarshipCard item={item} />}
                                keyExtractor={item => item.name}
                                ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
                            />
                }
            </ScreenContainer>
        </SafeAreaView>
    );
};

function ErrorLayout() {
    return (
        <View style={{ padding: 32 }}>
            <Text variant="bodyMedium" style={{ fontWeight: "500" }}>Une erreur est survenue.</Text>
        </View>
    );
}

function LoadingLayout() {
    return (
        <View style={{ padding: 32 }}>
            <Text variant="bodyMedium" style={{ fontWeight: "500" }}>Chargement...</Text>
        </View>
    );
}