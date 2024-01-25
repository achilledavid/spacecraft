import { Card } from "react-native-paper";
import { useImage } from "~/hooks/useImage";

export type Starship = {
    name: string;
    model: string;
    cost_in_credits: string;
    crew: string;
    hyperdrive_rating: string;
}

export default function StarshipCard({ item }: { item: Starship }) {
    const image = useImage(item.name);
    return (
        <Card>
            <Card.Title title={item.name} subtitle={item.cost_in_credits != "unknown" ? ("$" + item.cost_in_credits) : "Inestimé"} />
            <Card.Cover source={image} />
        </Card>
    )
}