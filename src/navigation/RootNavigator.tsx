import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Routes from "./Route";

import CustomNavigationBar from "~/navigation/CustomNavigationBar";
import StarshipFeed from "~/screens/StarshipFeed";
import Terms from "~/screens/Terms";
import StarshipDetails from "~/screens/StarshipDetails";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />
        }}
        initialRouteName={Routes.STARSHIP_FEED_SCREEN}
      >
        <Stack.Group>
          <Stack.Screen
            name={Routes.STARSHIP_FEED_SCREEN}
            component={StarshipFeed}
          />
          <Stack.Screen
            name={Routes.TERMS_SCREEN}
            component={Terms}
          />
          <Stack.Screen
            name={Routes.STARSHIP_DETAILS_SCREEN}
            component={StarshipDetails}
            options={{
              presentation: "modal",
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
