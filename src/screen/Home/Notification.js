import React from "react";
import { View, Text, StyleSheet ,ScrollView} from 'react-native'
import Container from "../../component/Container";
import Theme from "../../component/Theme";
import NotificationScreenHeader from "../../Header/NotificationScreenHeader";


function Notification() {
    return (
        <>
            <NotificationScreenHeader />
            <Container>
                <ScrollView>
                    <Text style={styles.t}>Notification Screen</Text>
                </ScrollView>
            </Container>


        </>
    )

}

const styles = StyleSheet.create({
    t: {
        color: Theme.colors.textColor
    }
})

export default Notification;