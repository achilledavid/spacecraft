import React, { useEffect } from "react";
import { DataTable } from "react-native-paper";

type Props = {
    route: any;
    navigation: any;
};

const StarshipDetails = ({ route, navigation }: Props) => {
    const { name, model, crew, cost_in_credits, hyperdrive_rating } = route.params;
    useEffect(() => {
        navigation.setOptions({ title: name });
    }, []);
    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Starship Details</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
                <DataTable.Cell>Name</DataTable.Cell>
                <DataTable.Cell>{name}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Model</DataTable.Cell>
                <DataTable.Cell>{model}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Crew</DataTable.Cell>
                <DataTable.Cell>{crew}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Cost in credits</DataTable.Cell>
                <DataTable.Cell>{cost_in_credits}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Hyperdrive rating</DataTable.Cell>
                <DataTable.Cell>{hyperdrive_rating}</DataTable.Cell>
            </DataTable.Row>
        </DataTable>
    );
};

export default StarshipDetails;
