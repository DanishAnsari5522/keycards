import React from "react";
import {View,Text, StyleSheet,Dimensions} from 'react-native';
import Theme from "../component/Theme";

function NotificationScreenHeader()
{
    return(
        <View style={styles.headercomp}>
            <Text style={styles.notification}>Notifications</Text>
        </View>
    )
}

const width=Dimensions.get('window').width;
const styles=StyleSheet.create({
    headercomp: {
        width:width,
        height: 60,
        padding:0,
        paddingHorizontal:20,
        backgroundColor:Theme.colors.headerBackground,
        alignItems:'center',
        flexDirection:'row',
        marginTop:30
    },
    notification:{
        color:Theme.colors.textColor,
        fontSize:22
    }
})

export default NotificationScreenHeader;