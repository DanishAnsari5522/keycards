import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Theme from '../../component/Theme'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
function Links() {
    const navigation = useNavigation();
    const logout = () => {
        AsyncStorage.clear();
        // alert("hii");
    }
    return (
        <View>
            <View>
                <TouchableOpacity><Text style={styles.option}>Setting</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.option} onPress={() => { navigation.navigate('CircleList') }}>Update Profile</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.option} onPress={() => logout()}>Logout</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    option: {
        color: Theme.colors.textColor,
        marginTop: 5,
        fontSize: 16
    }
})

export default Links;