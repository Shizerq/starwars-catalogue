/* eslint-disable react/style-prop-object */
import React from "react";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "react-query";

import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/Home";
import DetailsScreen from "./screens/Details";

import People from "./types/people";

export type Params = {
  Details: People;

  Home: undefined;
};

export type DetailsParams = RouteProp<Params, "Details">;

const Stack = createStackNavigator<Params>();
const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Details"
            component={DetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
