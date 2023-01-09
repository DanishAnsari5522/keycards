import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, Foundation } from '@expo/vector-icons'

// screen
import HomeContent from '../screen/Home/HomeContent'
import Search from '../screen/Home/Search'
import Notification from '../screen/Home/Notification'
import Upload from '../screen/Home/Upload'
import Profile from '../screen/Home/Profile'

import { HomeContentNaviagtion, SearchScreenNavigator, NotificationScreenNavigator, UploadScreenNavigator, ProfileScreenNavigator } from './CustomNavigation'

//screen Name

const homeContent = "Home";
const search = "Search";
const upload = "Upload"
const notification = "Notification";
const profile = "Profiless";


const Tab = createBottomTabNavigator();
function BottomNavigation() {
    return (
        <>
            <Tab.Navigator

                initialRouteName='homeContent'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;
                        if (rn == homeContent) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn == search) {
                            iconName = focused ? 'search' : 'search-outline';
                        } else if (rn == upload) {
                            iconName = focused ? 'add' : 'add-outline';
                        } else if (rn == notification) {
                            iconName = focused ? 'notifications' : 'notifications-outline';
                        } else if (rn == profile) {
                            iconName = focused ? 'person-circle' : 'person-circle-outline';
                        }
                        return (
                            <>
                                <Ionicons name={iconName} size={size} color={color} />
                            </>
                        )
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'blue',
                    showLabel: false,
                    style: {
                        backgroundColor: 'red',
                        height: 60
                    }
                }}
            >
                <Tab.Screen name={homeContent} component={HomeContentNaviagtion} options={{ headerShown: false }} />
                <Tab.Screen name={search} component={SearchScreenNavigator} options={{ headerShown: false }} />
                <Tab.Screen name={upload} component={UploadScreenNavigator} options={{ headerShown: false }} />
                <Tab.Screen name={notification} component={NotificationScreenNavigator} options={{ headerShown: false }} />
                <Tab.Screen name={profile} component={ProfileScreenNavigator} options={{ headerShown: false }} />
            </Tab.Navigator>
        </>
    )
}

export default BottomNavigation;




