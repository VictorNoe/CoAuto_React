import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailtsScreen from "../screens/DetailtsScreen";

const StackNavigator = createStackNavigator();

const NavigationScreen = () => {
    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen
                name='home'
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <StackNavigator.Screen
                name='details'
                component={DetailtsScreen}
                options={{
                    headerShown: true,
                }}
            />
        </StackNavigator.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <NavigationScreen/>
        </NavigationContainer>
    )
}