import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import profile from "../../../assets/Profile.png";
import React from 'react'
import Theme from '../../component/Theme';
function UserList() {
    const navigation = useNavigation()
    return (
        <>
            <TouchableOpacity style={styles.usercard}>
                <View style={styles.usernameandimg}>
                    <Image source={profile} style={styles.userprofilepic} />
                    <View>
                        <Text style={styles.username}>Danish</Text>
                        <Text style={styles.lastmsg}>hii</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    usercard: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        paddingBottom: 10,
        paddingVertical:10,
        paddingHorizontal:10,
        borderBottomColor:'gray',
        borderBottomWidth:2,
    },
    usernameandimg: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userprofilepic: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10
    },
    username: {
        fontSize: 18,
        color:'white'
    },
    lastmsg: {
        fontSize: 12,
        marginLeft: 4,
        color:'white'
    },
  

})

export default UserList;