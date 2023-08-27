import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import Container from "../../component/Container";
import Theme from "../../component/Theme";
import ProfileScreenHeader from "../../Header/ProfileScreenHeader";
import ProfileComp from "./ProfileComp";

function Profile() {

    return (
        <>
            <ProfileScreenHeader />
            <Container>
                <ProfileComp />
            </Container>
        </>
    )

}

const styles = StyleSheet.create({

})

export default Profile;