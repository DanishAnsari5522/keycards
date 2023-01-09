import React, { useState } from "react"
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import Container from "../../component/Container";
import profile from "../../../assets/Profile.png"
import Theme from "../../component/Theme";
import AsyncStorage from '@react-native-async-storage/async-storage'

function Upload() {
    const [cardkey, onChangeCardskey] = useState('');
    const [description, onChangeDescription] = useState('');
    const [validupto, onChangeValidupto] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        setError('')
        const user = await AsyncStorage.getItem("currentUser")
        const u = JSON.parse(user)

        if (!cardkey) {
            setError("key Required")
        } else if (!description) {
            setError("description Required")
        } else if (!validupto) {
            setError("validupto Required")
        } else {
            fetch('https://keycards-api.onrender.com/v1/post/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + u.token,
                },
                body: JSON.stringify({ cardkey, description, validupto })
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
        <>
            <Container>
                <View style={styles.info}>
                    <Image source={profile} resizeMode="cover" style={styles.prfile} />
                    <Text style={styles.username}>User Name</Text>
                </View>
                {error && <Text style={styles.error}>{error}</Text>}
                <View style={styles.upload}>
                    <TextInput
                        multiline={true}
                        numberOfLines={2}
                        placeholder="Enter Your key . . . ."
                        placeholderTextColor="gray"
                        style={{ color: 'white', paddingLeft: 10 }}
                        value={cardkey}
                        onChangeText={onChangeCardskey}
                    />
                    <TextInput
                        multiline={true}
                        numberOfLines={2}
                        placeholder="Enter key Description . . . ."
                        placeholderTextColor="gray"
                        style={{ color: 'white', paddingLeft: 10 }}
                        value={description}
                        onChangeText={onChangeDescription}
                    />
                    <TextInput
                        multiline={true}
                        numberOfLines={2}
                        placeholder="Enter Your key . . . ."
                        placeholderTextColor="gray"
                        style={{ color: 'white', paddingLeft: 10 }}
                        value={validupto}
                        onChangeText={onChangeValidupto}
                    />
                </View>
                <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.send}>Share</Text>
                </TouchableOpacity>




            </Container>
        </>
    )
}

const styles = StyleSheet.create({
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 70,
        marginBottom: 20,
    },
    prfile: {
        width: 50,
        height: 50,
        borderRadius: 40
    },
    username: {
        color: Theme.colors.textColor,
        marginLeft: 20,
        fontSize: 20
    },
    upload: {
        height: 150
    },
    send: {
        width: 100,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#841584",
        textAlign: 'center',
        padding: 8,
        color: "white",
        marginTop: 10,
        alignSelf: 'flex-end',
        fontSize: 15
    }
})

export default Upload;