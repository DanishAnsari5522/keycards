import React from 'react'
import { View, Text ,StyleSheet,Dimensions} from 'react-native'
import Constants from "expo-constants";
import BottomNavigation from '../Navigation/BottomNavigation';
import HomeScreenHeader from '../Header/HomeScreenHeader';

function Home() {
    return (
        <>
            <View style={styles.contaner}>
                {/* <View style={styles.navigation}>
                    <HomeScreenHeader />
                </View> */}
                <View style={styles.bottomnavigation}>
                    <BottomNavigation />
                </View>
            </View>
        </>
    )
}

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window")
const styles=StyleSheet.create({
    contaner:{
          width,
          height,
          paddingTop: Constants.statusBarHeight,
    },
    navigation:{
        width,
        height:50,
    },
    bottomnavigation:{
        width,
        height:height-0,
        backgroundColor:'red',
    }

})

export default Home;