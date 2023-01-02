import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import Theme from "../component/Theme";
import { AppContext } from "../context/AppContext";
import AsyncStorage from '@react-native-async-storage/async-storage'


function SearchScreenHeader() {
    const navigation = useNavigation();
    const [name, onChangeName] = useState('');
    console.log(name);

    const searchHandle = async (event) => {
        const user = await AsyncStorage.getItem("currentUser")
        const u = JSON.parse(user)
        let name = event.target, value;
        // console.log(u.name);
        let result = await fetch(`http://localhost:5000/v1/user/search?name=${name}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + u.token,
                
            }
        }
        );
        // console.log(u.token);
        result = await result.json();
        if (result) {
            console.log(result);
        }
    }
    return (
        <View>
            <View style={styles.headercomp}>
                <View style={styles.ds}>
                    <TouchableOpacity onPress={() => { navigation.navigate("Home") }}><Icon name="arrow-back" color='gray' size={25} style={styles.arrowback} /></TouchableOpacity>
                    <TextInput placeholder="Search Name"
                        placeholderTextColor="gray"
                        style={styles.searchbox}
                        value={name}
                        onChangeText={onChangeName}
                        onChange={searchHandle}
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