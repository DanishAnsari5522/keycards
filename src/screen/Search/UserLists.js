import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Theme from '../../component/Theme'
function UserList({ route }) {
    const { id } = route.params;
    console.log(id);
    const dofollow = async (e) => {
        setError('')
        const user = await AsyncStorage.getItem("currentUser")
        const u = JSON.parse(user)

        fetch('http://localhost:5000/v1/follow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + u.token,
            },
            body: JSON.stringify({ action: "follow", to: u.data.id })
        })
            .then(res => res.json()).then(
                data => {
                    console.log(data);
                    if (data.error) {
                        setError(data.error);
                    } else {
                        navigation.navigate('Home');
                    }
                }
            )

    }
    return (
        <>
            <View style={styles.contaner}>
                <View style={styles.mainprofilecomp} >
                    <View style={styles.profileimgandname}>
                        <Image resizeMode='contain' source={require('../../../assets/Profile.png')} style={styles.profileimg} />
                        <View style={styles.nameandno}>
                            <TouchableOpacity style={styles.name} onPress={navigation.navigate("SearchProfile")}>{item.name}</TouchableOpacity>
                            <Text style={styles.star}>
                                <Icon name="star" color='white' size={18} style={styles.arrowback} />
                                <Icon name="star" color='white' size={18} style={styles.arrowback} />
                                <Icon name="star" color='white' size={18} style={styles.arrowback} />
                                <Icon name="star" color='white' size={18} style={styles.arrowback} />
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.invite} onPress={dofollow}>Add to Circle</TouchableOpacity>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    contaner: {
        height: '100%',
        backgroundColor: Theme.colors.background
    },
    search: {
        color: Theme.colors.textColor
    },
    main: {
        paddingTop: 10
    },
    // addto circle
    mainprofilecomp: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 0
    },
    profileimg: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 10
    },
    profileimgandname: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        height: 60,
    },
    nameandno: {
        height: 40,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 4,
        color: Theme.colors.textColor
    },
    phoneNo: {
        fontSize: 13
    },
    invite: {
        color: 'red',
        fontSize: 16,
        // textTransform:'uppercase'
    }

})

export default UserList;