import React from 'react';
import {StatusBar, StyleSheet, Text, View} from "react-native";

const HomeScreen = () => {
    return (
        <View>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#EFF5FF'}/>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default HomeScreen;