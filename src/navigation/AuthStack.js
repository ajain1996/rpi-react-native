import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import RegisterScreen from "../screens/auth/RegisterScreen";
import PaymentsScreen from "../screens/payments/PaymentsScreen";
import UploadScreenshotScreen from "../screens/upload/UploadScreenshotScreen";
import MemberIdCardScreen from "../screens/id-card/MemberIdCardScreen";

const Stack = createStackNavigator();

export default function AuthStack() {

    const screenOptions = {
        headerShown: false,
    };

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#1572B9" />
            <Stack.Navigator
                screenOptions={screenOptions}
                initialRouteName={"RegisterScreen"}
            >
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="PaymentsScreen" component={PaymentsScreen} />
                <Stack.Screen name="UploadScreenshotScreen" component={UploadScreenshotScreen} />
                <Stack.Screen name="MemberIdCardScreen" component={MemberIdCardScreen} />
            </Stack.Navigator>
        </>
    );
}
