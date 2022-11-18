import React from "react";
import { View, Text ,StyleSheet} from 'react-native'
import Container from "../../component/Container";
import Theme from "../../component/Theme";

function Profile() {
    return (
        <>
            <Container>
                <Text style={styles.profile}>Profile Screen</Text>
            </Container>
        </>
    )

}

const styles=StyleSheet.create({
    profile:{
        color:Theme.colors.textColor
    }
})

export default Profile;