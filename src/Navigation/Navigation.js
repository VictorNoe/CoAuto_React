import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import Header from "../components/Header";

const StackNavigator = createStackNavigator();

const NavigationScreen = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name="details"
        component={DetailsScreen}
        options={Header("Detalles")}
      />
    </StackNavigator.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <NavigationScreen />
    </NavigationContainer>
  );
}
