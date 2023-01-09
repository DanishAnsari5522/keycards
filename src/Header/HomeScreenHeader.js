import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import Theme from '../component/Theme';
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

function HomeScreenHeader() {
    const navigation = useNavigation();
    return (
        <View style={styles.contaner}>
            <Text style={styles.username}>KeyCards</Text>
            {/* <TouchableOpacity onPress={() => { navigation.navigate("Chat") }}>
                <Ionicons name="chatbubble-ellipses-sharp" size={30} color="white" />
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    contaner: {
        height: 60,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Theme.colors.headerBackground,
    },
    username: {
        color: 'white',
        fontSize:18
    },
    profileimage: {
        width: 40,
        height: 40,
        borderRadius: 40,
    }
})

export default HomeScreenHeader;