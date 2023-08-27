import { View, Text, Button, StyleSheet, Image, TextInput, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import LoginScreenImage from '../../../assets/LoginScreenImage.png'
import Icon from '@expo/vector-icons/MaterialIcons'
import Theme from '../../component/Theme'
import AsyncStorage from '@react-native-async-storage/async-storage'



function Login({ navigation }) {
    const [phone, onChangePhone] = useState('')
    const [password, onChangePassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = async (e) => {
        setError('')
        setSuccess('')

        if (!phone) {
            setError("Phone No. Required")
        } else if (phone.length != 10) {
            setError("Phone is not valid")
        } else if (!password) {
            setError("Password Required")
        } else {
            fetch('https://keycards-api.onrender.com/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ phone, password })
            }).then(res => res.json()).then(
                async data => {
                    console.log(data);
                    if (data.success == false) {
                        setError(data.message);
                    } else if (data.success == true) {
                        console.log(data);
                        await AsyncStorage.setItem("currentUser", JSON.stringify(data))
                        navigation.navigate('Home', { token: data.token });
                    }
                }
            )
        }
    }
    return (
        <View style={styles.c}>
            <ScrollView>
                <View style={styles.container}>
                    <Image source={LoginScreenImage} resizeMode="cover" style={styles.Loginimmg} />
                    <View style={styles.logincomp}>
                        <Text style={styles.logintext}>Login</Text>
                        {error && <Text style={styles.error}>{error}</Text>}
                        {success && <Text style={styles.success}>{success}</Text>}
                        <View style={styles.inputcomp}>
                            <Icon name="mail" color='white' size={22} style={styles.attherate} />
                            <TextInput placeholder="Phone No." style={styles.input1} value={phone} placeholderTextColor="gray" onChangeText={onChangePhone} maxLength={10}></TextInput>
                        </View>

                        <View style={styles.inputcomp}>
                            <Icon name="lock" color='white' size={22} style={styles.attherate} />
                            <View>
                                <TextInput secureTextEntry={true} placeholder="Password" style={styles.input2} value={password} placeholderTextColor="gray" onChangeText={onChangePassword}></TextInput>
                                <Text style={styles.forgot} onPress={() => { navigation.navigate("ForgotPassword") }} >forgot?</Text>

                            </View>
                        </View>
                        <View>
                            {/*  */}
                            <Text style={styles.loginbtn} onPress={handleSubmit}>Login</Text>
                        </View>
                        <Text style={styles.forRegister}>New to KeyCards?  <Text onPress={() => { navigation.navigate("Signup") }} style={styles.forRegisterlink}>Register</Text></Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


const { width } = Dimensions.get("window")
const { height } = Dimensions.get("window")

const styles = StyleSheet.create({
    c: {
        width: '100%',
        height: '100%',
        backgroundColor: Theme.colors.background
    },
    container: {
        width,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,

    },

    error: {
        color: 'red'
    },
    success: {
        color: 'green'
    },

    // login page 

    Loginimmg: {
        width,
        height: 450,
    },
    logincomp: {
        width: '100%',
        marginBottom: 80

    },
    inputcomp: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingBottom: 0,
        marginTop: 20
    },
    attherate: {
        width: 22,
        height: 22,
        opacity: 0.5
    },
    lock: {
        width: 27,
        height: 27,
        opacity: 0.5
    },
    input1: {
        height: 50,
        fontSize: 16,
        width: '100%',
        marginLeft: 10,
        color: Theme.colors.textColor
    },
    input2: {
        height: 50,
        fontSize: 16,
        width: width - 80,
        marginVertical: 0,
        marginLeft: 10,
        paddingRight: 90,
        color: Theme.colors.textColor

    },
    logintext: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 0,
        color: Theme.colors.textColor
    },
    loginbtn: {
        backgroundColor: Theme.colors.headerBackground,
        color: 'white',
        width: '100%',
        height: 50,
        textAlign: 'center',
        alignSelf: 'center',
        borderRadius: 9,
        paddingTop: 11,
        marginTop: 20,
        fontSize: 16
    },
    forRegister: {
        marginTop: 60,
        alignSelf: 'center',
        color: Theme.colors.textColor
    },
    forRegisterlink: {
        color: '#567BFF'
    },
    // forgot
    forgot: {
        position: 'absolute',
        right: 0,
        top: 15,
        fontSize: 14,
        color: '#567BFF',
    }
});

export default Login;