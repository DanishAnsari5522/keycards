import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

function Login({ navigation }) {
    return (
        <View style={styles.log}>
            <Text>Login Page</Text>
            <Button
                title="SignUP"
                color="#841584"
                onPress={() => { navigation.navigate("Signup") }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    log: {
        // padding:26,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Login;