import React from "react"
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';
import Container from "../../component/Container";
import profile from "../../../assets/Profile.png"
import Theme from "../../component/Theme";

function Upload() {
    return (
        <>
            <Container>
                <View style={styles.info}>
                    <Image source={profile} resizeMode="cover" style={styles.prfile} />
                    <Text style={styles.username}>User Name</Text>
                </View>

                <View style={styles.upload}>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        placeholder="Enter Your key . . . ."
                        placeholderTextColor="gray"
                    />
                </View>
                <Text style={styles.send}>Share</Text>



            </Container>
        </>
    )
}

const styles = StyleSheet.create({
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20
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