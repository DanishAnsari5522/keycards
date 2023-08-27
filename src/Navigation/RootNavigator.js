import React from "react";
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "../screen/Splash";
// import Login from "../screen/Login";
// import Signup from "../screen/Signup";
import Login from "../screen/Auth/Login";
import Signup from "../screen/Auth/Signup";
import Otp from "../screen/otp";
import Chat from "../screen/Chat/Index";
import BottomNavigation from "./BottomNavigation";
import Setting from "../screen/Setting/Setting";

const Stack = createNativeStackNavigator();

function RootNavigator() {

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Signup" component={Signup} />
                    <Stack.Screen name="Otp" component={Otp} />
                    <Stack.Screen name="Chat" component={Chat} />
                    <Stack.Screen name="Home" component={BottomNavigation} />
                    <Stack.Screen name="Setting" component={Setting} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

const styles = StyleSheet.create({

})

export default RootNavigator;