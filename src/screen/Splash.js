import { View, Text, Image } from 'react-native'
import React, { useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import logo from '../../assets/logo.png'
import logo from '../../assets/D.png'
import Theme from '../component/Theme'
export default function Splash({ navigation }) {
    const getCurrentUser = async () => {
        const user = await AsyncStorage.getItem("currentUser")
        const u = JSON.parse(user)
        setTimeout(() => {
            if (u?.token) {
                navigation.replace("Home")
            } else {
                navigation.replace("Login")
            }
        }, 2500);
    }
    useEffect(() => {
        getCurrentUser()
    }, [])
    return (
        <View style={{ backgroundColor:Theme.colors.background, flex: 1, justifyContent: "center", alignItems: "center" }} >
            <Image source={logo} resizeMode="cover" style={{ height: 90, width: 90 }} />
            <Text style={{ color: "white", fontWeight: "700", fontSize: 20, position: "absolute", bottom: 60 }}>KeyCards</Text>
        </View>
    )
}