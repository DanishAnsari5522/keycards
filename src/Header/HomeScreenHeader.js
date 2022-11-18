import React from 'react';
import { View,Text, Image ,StyleSheet} from 'react-native';
import Theme from '../component/Theme';

function HomeScreenHeader()
{
    return(
        <View style={styles.contaner}>
            <Text style={styles.username}>Danish Ansari</Text>
            <Image source={require('../../assets/Profile.png')} style={styles.profileimage}/>
        </View>
    )
}

const styles=StyleSheet.create({
    contaner:{
        height:60,
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:Theme.colors.headerBackground,
    },
    username:{
        color:'white'
    },
    profileimage:{
        width:40,
        height:40,
        borderRadius:40,
    }
})

export default HomeScreenHeader;