import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

import { useImage } from "~/hooks/useImage";
import Routes from "~/navigation/Route";

export type Starship = {
  name: string;
  model: string;
  cost_in_credits: string;
  crew: string;
  hyperdrive_rating: string;
};

interface StarshipCardProps {
  item: Starship;
  navigation: any;
}

const StarshipCard: React.FC<StarshipCardProps> = ({ item, navigation }) => {
  const image = useImage(item.name);

  const handleOnPress = () => {
    navigation?.navigate(Routes.STARSHIP_DETAILS_SCREEN, {
      name: item.name,
      model: item.model,
      cost_in_credits: item.cost_in_credits,
      crew: item.crew,
      hyperdrive_rating: item.hyperdrive_rating,
      image: image
    });
  };

  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title={item.name}
          subtitle={
            item.cost_in_credits !== "unknown"
              ? `$${item.cost_in_credits}`
              : "Inestimé"
          }
        />
        <Card.Cover source={image} style={styles.image} />
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    shadowColor: "transparent",
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowOpacity: 0,
    shadowRadius: 0
  },
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  image: {
    borderRadius: 0
  }
});

export default StarshipCard;
