import React from 'react'
import { View, Text,StyleSheet,Button } from 'react-native'

function Main({navigation}) {
    return (
        <View style={styles.sig}>
            <Text>Main Page</Text>
            <Button
                title="Login"
                color="#841584"
                onPress={() => { navigation.navigate("Login") }}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    sig:{
        // padding:26
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Main;