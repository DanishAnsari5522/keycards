import { View, Text, Button, StyleSheet, Dimensions, Image, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SignUpScreenImage from '../../assets/SignUpScreenImage.png'
import Icon from '@expo/vector-icons/MaterialIcons'
import Theme from '../component/Theme'

function Signup({ navigation }) {
    const [name, onChangeName] = useState('')
    const [email, onChangeEmail] = useState('')
    const [phone, onChangePhone] = useState('')
    const [password, onChangePassword] = useState('')
    const [cpassword, onChangeCPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = async (e) => {
        setError('')
        setSuccess('')

        const isValidEmail = /\S+@\S+\.\S+/.test(email);
        const isphoneNo = phone.length;
        console.log(isphoneNo);
        if (!name) {
            setError("FullName Required")
        } else if (!isValidEmail) {
            setError("Invalid Email")
        } else if (!phone) {
            setError("phoneNo Required")
        } else if (!isphoneNo == 10) {
            setError("Enter 10 No.")
        } else if (!password) {
            setError("Password Required")
        } else if (!cpassword) {
            setError("Conform Password Required")
        } else if (password != cpassword) {
            setError("Password Not match")
        } else {
            fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, phone, password })
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
    }
    return (
        <ScrollView>
            <View style={styles.container}>

                <Image source={SignUpScreenImage} resizeMode="cover" style={styles.Loginimmg} />
                <View style={styles.logincomp}>
                    <Text style={styles.logintext}>Sign Up</Text>
                    {error && <Text style={styles.error}>{error}</Text>}
                    {success && <Text style={styles.success}>{success}</Text>}

                    <View style={styles.inputcomp}>
                        <Icon name="person" color='gray' size={22} style={styles.attherate} />
                        <TextInput placeholder="Full Name" style={styles.input1} value={name} placeholderTextColor="gray" onChangeText={onChangeName}></TextInput>
                    </View>

                    <View style={styles.inputcomp}>
                        <Icon name="mail" color='gray' size={22} style={styles.attherate} />
                        <TextInput placeholder="Email Id" style={styles.input1} value={email} placeholderTextColor="gray" onChangeText={onChangeEmail}></TextInput>
                    </View>
                    <View style={styles.inputcomp}>
                        <Icon name="store" color='gray' size={22} style={styles.attherate} />
                        <TextInput placeholder="Phone No." style={styles.input1} value={phone} placeholderTextColor="gray" onChangeText={onChangePhone}></TextInput>
                    </View>
                    <View style={styles.inputcomp}>
                        <Icon name="lock" color='gray' size={22} style={styles.attherate} />
                        <TextInput secureTextEntry={true} placeholder="Password" style={styles.input1} placeholderTextColor="gray" value={password} onChangeText={onChangePassword}></TextInput>
                    </View>

                    <View style={styles.inputcomp}>
                        <Icon name="lock" color='gray' size={22} style={styles.attherate} />
                        <TextInput secureTextEntry={true} placeholder="Conform Password" style={styles.input1} placeholderTextColor="gray" value={cpassword} onChangeText={onChangeCPassword}></TextInput>
                    </View>
                    <View>
                        <TouchableOpacity onPress={handleSubmit}>
                            <Text style={styles.loginbtn}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.forRegister}>already have an account? <Text onPress={() => { navigation.navigate("Home") }} style={styles.forRegisterlink}>Login</Text></Text>
                </View>

            </View>
        </ScrollView>
    )
}
const { width } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        width,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        backgroundColor: Theme.colors.background
    },
    error: {
        color: 'red'
    },
    success: {
        color: 'green'
    },
    Loginimmg: {
        width,
        height: 350,
        marginBottom: 0
    },
    logincomp: {
        width: '100%',
        marginBottom: 80

    },
    inputcomp: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingBottom: 0,
        marginTop: 20,
        borderRadius: 4,
        paddingLeft: 4
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

    logintext: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
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
        color: "#567BFF",
    },
    // forgot
    forgot: {
        position: 'absolute',
        right: 25,
        top: 20,
        fontSize: 16,
        color: 'blue',
    }
})

export default Signup;