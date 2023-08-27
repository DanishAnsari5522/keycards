import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import Theme from "../component/Theme";
import { AppContext } from "../context/AppContext";



function SearchScreenHeader({ searchHandle, name }) {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.headercomp}>
                <View style={styles.ds}>
                    <TouchableOpacity onPress={() => { navigation.navigate("Home") }}><Icon name="arrow-back" color='gray' size={25} style={styles.arrowback} /></TouchableOpacity>
                    <TextInput placeholder="Search Name"
                        placeholderTextColor="gray"
                        style={styles.searchbox}
                        value={name}
                        onChangeText={searchHandle}
                    ></TextInput>
                </View>
            </View>
        </View>
    )
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    headercomp: {
        width: width,
        height: 60,
        padding: 0,
        paddingHorizontal: 10,
        backgroundColor: Theme.colors.headerBackground,
        marginTop: 30
    },
    ds: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    arrowback: {
        marginRight: 0,
        color: Theme.colors.textColor,
    },
    headernamee: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
    },
    searchbox: {
        width: width - 70,
        borderWidth: 1,
        borderColor: Theme.colors.textColor,
        paddingLeft: 10,
        paddingTop: 1,
        paddingBottom: 1,
        borderRadius: 8,
        fontSize: 13,
        marginLeft: 10,
        color: Theme.colors.textColor
    }

})

export default SearchScreenHeader;