import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import Container from "../../component/Container";
import Theme from "../../component/Theme";


function Notification() {
    return (
        <>
            <Container>
                    <Text style={styles.t}>Notification Screen</Text>
                    <Text style={styles.t}>Notification Screen</Text>

            </Container>


        </>
    )

}

const styles = StyleSheet.create({
    t: {
        color:Theme.colors.textColor
    }
})

export default Notification;