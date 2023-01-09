import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import RegisterScreen from "../screens/auth/RegisterScreen";

export default function AppStack() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#1572B9" />
            <Stack.Navigator initialRouteName="Root"
                screenOptions={screenOptions}
            >
                <Stack.Screen name="Root" component={RegisterScreen} />
            </Stack.Navigator>
        </>
    );
}