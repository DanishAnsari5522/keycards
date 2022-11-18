import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, Foundation} from '@expo/vector-icons'

// screen
import HomeContent from '../screen/Home/HomeContent'
import Search from '../screen/Home/Search'
import Notification from '../screen/Home/Notification'
import Profile from '../screen/Home/Profile'
//screen Name

const homeContent="Home";
const search="Search";
const notification="Notification";
const profile="Profile";


const Tab = createBottomTabNavigator();
function BottomNavigation() {
    return (
        <>
        <NavigationContainer independent={true} >
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
                        } else if (rn == notification) {
                            iconName = focused ? 'notifications' : 'notifications-outline';
                        }else if (rn == profile) {
                            iconName = focused ? 'person-circle' : 'person-circle-outline';
                        }
                        return (
                            <>
                            <Ionicons name={iconName} size={size} color={color} />
                            </>
                        )
                    },
                })}
                tabBarOption={{
                    actionTintColor:'Tomato'
                }}
                >
                
                <Tab.Screen name={homeContent} component={HomeContent} options={{headerShown: false}}/>
                <Tab.Screen name={search} component={Search} options={{headerShown: false}}/>
                <Tab.Screen name={notification} component={Notification} options={{headerShown: false}}/>
                <Tab.Screen name={profile} component={Profile} options={{headerShown: false}}/>                
            </Tab.Navigator>
        </NavigationContainer>
        </>
    )
}

export default BottomNavigation;




