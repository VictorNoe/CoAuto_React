import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import DetailtsScreen from "../screens/DetailtsScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const StackNavigator = createStackNavigator();
const TabNavigator = createBottomTabNavigator();

const NavigationScreen = () => {
    return (
        <TabNavigator.Navigator
            screenOptions={{
                headerShown: true,
            }}
        >
            <TabNavigator.Screen
                name='login'
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            />
            <TabNavigator.Screen
                name='home'
                component={HomeScreen}
            />
            <TabNavigator.Screen
                name='details'
                component={DetailtsScreen}
            />
        </TabNavigator.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <NavigationScreen/>
        </NavigationContainer>
    )
}