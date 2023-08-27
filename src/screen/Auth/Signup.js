import React, { useState, useRef } from 'react'
import { View, Text, Button, StyleSheet, Dimensions, Image, TextInput, ScrollView, TouchableOpacity, Picker } from 'react-native'
import SignUpScreenImage from '../../../assets/SignUpScreenImage.png';
import Icon from '@expo/vector-icons/MaterialIcons';
import Theme from '../../component/Theme';
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat";
import { firebaseConfig } from '../../firebase_config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Signup({ navigation }) {
    const [name, onChangeName] = useState('');
    const [email, onChangeEmail] = useState('');
    const [phone, onChangePhone] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [password, onChangePassword] = useState('');
    const [cpassword, onChangeCPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [age, setAge] = useState('');
    const [verificationid, setVerificationid] = useState(null);
    const recaptchVerifier = useRef(null);
    const [vari, setVari] = useState(false);
    const [id, setID] = useState();

    const pin1Ref = useRef("");
    const pin2Ref = useRef("");
    const pin3Ref = useRef("");
    const pin4Ref = useRef("");
    const pin5Ref = useRef("");
    const pin6Ref = useRef("");

    const [pin1, setPin1] = useState(null);
    const [pin2, setPin2] = useState(null);
    const [pin3, setPin3] = useState(null);
    const [pin4, setPin4] = useState(null);
    const [pin5, setPin5] = useState(null);
    const [pin6, setPin6] = useState(null);

    const handleChange = (event) => {
        setAge(event.target.value);
    };



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
        } else if (isphoneNo != 10) {
            setError("Phone no is not valid")
        } else if (!selectedGender) {
            setError("Gender Required")
        } else if (!password) {
            setError("Password Required")
        } else if (!cpassword) {
            setError("Conform Password Required")
        } else if (password != cpassword) {
            setError("Password Not match")
        } else {

            let result = await fetch('http://localhost:5000/v1/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, phone, gender: selectedGender, password })
            })
                .then(res => res.json()).then(
                    async data => {
                        console.log(data);
                        if (data.success == false) {
                            setError(data.message);
                        } else if (data.success == true) {
                            await AsyncStorage.setItem("UserInfo", data.message);

                            setID(data.message._id)
                            var phonenumber1 = '+' + age + phone;
                            console.log(phonenumber1);
                            const phoneProvider = new firebase.auth.PhoneAuthProvider();
                            phoneProvider
                                .verifyPhoneNumber(phonenumber1, recaptchVerifier.current)
                                .then(setVerificationid);
                            setVari(true);
                            console.log(id);
                        }
                    }
                )
        }
    }

    const confirmCode = () => {

        console.log(pin1.nativeEvent.text + pin2.nativeEvent.text + pin3.nativeEvent.text + pin4.nativeEvent.text + pin5.nativeEvent.text + pin6.nativeEvent.text);
        var code1 = pin1.nativeEvent.text + pin2.nativeEvent.text + pin3.nativeEvent.text + pin4.nativeEvent.text + pin5.nativeEvent.text + pin6.nativeEvent.text;

        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationid,
            code1
        );
        firebase.auth().signInWithCredential(credential)
            .then(async () => {
                alert("done");
                await AsyncStorage.setItem("currentUser", phone)
                navigation.navigate('Login');
                let result = await fetch(`http://localhost:5000/v1/auth/varify-otp/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ accountCreated: 'true' })
                })

                // setCode('');
            })
            .catch((error) => {
                alert(error);
            })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <FirebaseRecaptchaVerifierModal
                    ref={recaptchVerifier}
                    firebaseConfig={firebaseConfig}
                />
                {!vari && (
                    <>
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
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <View>
                                    <FormControl sx={{ borderRadius: 1, border: 0 }} size="small" style={styles.sel}>
                                        <InputLabel id="demo-select-small" sx={{ width: '100%' }}>+91</InputLabel>
                                        <Select
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}
                                            sx={{ border: 0, padding: 0, height: 50, width: '100%' }}
                                        >
                                            <MenuItem value={91}>+91</MenuItem>
                                            <MenuItem value={92}>+92</MenuItem>
                                            <MenuItem value={41}>+41</MenuItem>
                                        </Select>
                                    </FormControl>
                                </View>
                                <View style={styles.inputcomp}>
                                    <Icon name="store" color='gray' size={22} style={styles.attherate} />
                                    <TextInput placeholder="Phone No." style={styles.input1} value={phone} placeholderTextColor="gray" onChangeText={onChangePhone} maxLength={10}></TextInput>
                                </View>
                            </View>
                            <View>
                                <Picker
                                    selectedValue={selectedGender}
                                    style={{ height: 50, width: '100%', backgroundColor: Theme.colors.background, color: 'white', marginTop: 10, borderRadius: 5, borderBottomWidth: 1, borderBottomColor: 'white' }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)}
                                >
                                    <Picker.Item label="Select Gender" value="gender" disabled={true} />
                                    <Picker.Item label="Male" value="Male" />
                                    <Picker.Item label="Female" value="Female" />
                                </Picker>

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
                            <Text style={styles.forRegister}>already have an account? <Text onPress={() => { navigation.navigate("Login") }} style={styles.forRegisterlink}>Login</Text></Text>
                        </View>
                    </>
                )}

                {
                    vari && (
                        <>
                            <View>
                                <Text style={styles.verift}>Verify Your Number</Text>
                                <Text style={styles.sended}>Enter the Otp sended to {phone}</Text>
                            </View>

                            <View style={styles.dan}>
                                <View style={styles.TextInputView}>
                                    <TextInput
                                        placeholder="0"
                                        ref={pin1Ref}
                                        keyboardType={'number-pad'}
                                        maxLength={1}
                                        // value={pin1}
                                        onChange={(pin1) => {
                                            setPin1(pin1)
                                            if (pin1 != null) {
                                                pin2Ref.current.focus();
                                            }
                                        }}
                                        style={styles.TextInputText}
                                    />
                                </View>
                                <View style={styles.TextInputView}>
                                    <TextInput
                                        ref={pin2Ref}
                                        keyboardType={'number-pad'}
                                        maxLength={1}
                                        onChange={(pin2) => {
                                            setPin2(pin2)
                                            if (pin2 != "") {
                                                pin3Ref.current.focus();
                                            }
                                        }}
                                        style={styles.TextInputText}
                                        placeholder="0"

                                    />
                                </View>
                                <View style={styles.TextInputView}>
                                    <TextInput
                                        ref={pin3Ref}
                                        keyboardType={'number-pad'}
                                        maxLength={1}
                                        onChange={(pin3) => {
                                            setPin3(pin3)
                                            if (pin3 != "") {
                                                pin4Ref.current.focus();
                                            }
                                        }}
                                        style={styles.TextInputText}
                                        placeholder="0"
                                    />
                                </View>
                                <View style={styles.TextInputView}>
                                    <TextInput
                                        ref={pin4Ref}
                                        keyboardType={'number-pad'}
                                        maxLength={1}
                                        onChange={(pin4) => {
                                            setPin4(pin4)
                                            pin5Ref.current.focus();
                                        }}
                                        style={styles.TextInputText}
                                        placeholder="0"

                                    />
                                </View>
                                <View style={styles.TextInputView}>
                                    <TextInput
                                        ref={pin5Ref}
                                        keyboardType={'number-pad'}
                                        maxLength={1}
                                        onChange={(pin5) => {
                                            setPin5(pin5)
                                            pin6Ref.current.focus();

                                        }}
                                        style={styles.TextInputText}
                                        placeholder="0"

                                    />
                                </View>
                                <View style={styles.TextInputView}>
                                    <TextInput
                                        ref={pin6Ref}
                                        keyboardType={'number-pad'}
                                        maxLength={1}
                                        onChange={(pin6) => {
                                            setPin6(pin6)
                                        }}
                                        style={styles.TextInputText}
                                        placeholder="0"

                                    />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.having}>Having Trouble ? Request a new Otp in</Text>
                            </View>
                            <View>
                                <Text style={styles.next} onPress={confirmCode}>Next</Text>
                            </View>
                        </>
                    )
                }
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
        color: Theme.colors.textColor,
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
    },

    //new style
    // inputcomp: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     paddingBottom: 0,
    //     marginTop: 20,
    //     borderRadius: 4,
    //     paddingLeft: 4
    // },
    // for Otp style

    verift: {
        marginTop: 80,
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 4,
    },
    sended: {
        color: '#898989',
        fontWeight: '400',
        fontSize: 16
    },
    TextInputView: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        margin: 4,
    },
    TextInputText: {
        fontSize: 32,
        fontWeight: '400',
        // textDecorationLine: 0,
        width: 50,
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
    },
    having: {
        fontSize: 12,
        fontWeight: '400',
        marginTop: 30,
        color: '#636363'
    },
    next: {
        backgroundColor: '#0085ff',
        color: 'white',
        width: '100%',
        height: 50,
        textAlign: 'center',
        alignSelf: 'center',
        borderRadius: 25,
        paddingTop: 11,
        marginTop: 450,
        fontSize: 16,
        fontWeight: '400'
    },
    dan: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent:'space-between'
    }
})

export default Signup;