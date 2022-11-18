import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Container from "../../component/Container";
import Theme from "../../component/Theme";
import SearchScreenHeader from "../../Header/SearchScreenHeader";
function Search() {
    return (
        <>
            <SearchScreenHeader />
            <Container>
                <ScrollView>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                    <Text style={styles.search}>Search Screen</Text>
                </ScrollView>
            </Container>

        </>
    )

}

const styles = StyleSheet.create({
    contaner: {
        height: '100%',
        backgroundColor: Theme.colors.background
    },
    search: {
        color: Theme.colors.textColor
    }
})

export default Search;