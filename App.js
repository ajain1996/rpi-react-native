import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from "react-native";
import Auth from "./src/service/Auth";
import { setUser } from "./src/redux/reducer/user";
import AuthStack from "./src/navigation/AuthStack";
import AppStack from "./src/navigation/AppStack";

export default function App() {

  const dispatch = useDispatch();

  const { userData, login } = useSelector(state => state.User);

  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  const [loginChk, setLoginChk] = useState(true);

  const getUser = async () => {
    let data = await Auth.getAccount();
    console.log('data fetched: ', data);
    if (data !== null) {
      dispatch(setUser(data));
      setLoginChk(false);
    } else {
      setLoginChk(false);
    }
  }

  useEffect(() => {
    getUser()
  }, []);

  if (loginChk) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1572B9" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen"
          screenOptions={screenOptions}
        >
          {!login
            ? <Stack.Screen name="Auth" component={AuthStack} />
            : <Stack.Screen name="AppStack" component={AppStack} />}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}