import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// custom navigation
import HomeContent from '../screen/Home/HomeContent'
import Search from '../screen/Home/Search'
import Notification from '../screen/Home/Notification'
import Upload from '../screen/Home/Upload'
import Profile from '../screen/Home/Profile'
import Test from '../screen/Test'
import CircleList from '../screen/CircleList/Index'
import SearchProfile from '../screen/SearchProfile/Index'
import ProfileHome from '../screen/SearchProfile/ProfileHome'
// custom navigation

const Stack = createStackNavigator()

const HomeContentNaviagtion = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="HomeContent"
                component={HomeContent}
            />
            <Stack.Screen
                name="ProfileHome"
                component={ProfileHome}
            />
            <Stack.Screen
                name="SearchProfile"
                component={SearchProfile}
            />
        </Stack.Navigator>
    )
}
export { HomeContentNaviagtion }

const SearchScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Search"
                component={Search}
            />
            <Stack.Screen
                name="SearchProfile"
                component={SearchProfile}
            />
        </Stack.Navigator>
    )
}
export { SearchScreenNavigator }

const NotificationScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Notification"
                component={Notification}
            />
            <Stack.Screen
                name="Test"
                component={Test}
            />
        </Stack.Navigator>
    )
}
export { NotificationScreenNavigator }

const UploadScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Upload"
                component={Upload}
            />
            <Stack.Screen
                name="Test"
                component={Test}
            />
        </Stack.Navigator>
    )
}
export { UploadScreenNavigator }

const ProfileScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Profile"
                component={Profile}
            />
            <Stack.Screen
                name="Test"
                component={Test}
            />
            <Stack.Screen
                name="CircleList"
                component={CircleList}
            />
        </Stack.Navigator>
    )
}
export { ProfileScreenNavigator }