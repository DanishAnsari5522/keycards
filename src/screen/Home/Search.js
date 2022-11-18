import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import Container from "../../component/Container";
import Theme from "../../component/Theme";
function Search() {
    return (
        <>
            <Container>
                <Text style={styles.search}>Search Screen</Text>
            </Container>

        </>
    )

}

const styles = StyleSheet.create({
    contaner: {
        height: '100%',
        backgroundColor: Theme.colors.background
    },
    search:{
        color:Theme.colors.textColor
    }
})

export default Search;