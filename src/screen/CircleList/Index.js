import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import Container from "../../component/Container";
import Theme from "../../component/Theme";
import CircleListHeader from "../../Header/CircleListHeader";
import Icon from '@expo/vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';

function CircleList({ route, navigation }) {
    // const { itemId } = route.params;
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [data, setData] = useState([]);
    const searchHandle = async (_name) => {
        const user = await AsyncStorage.getItem("currentUser")
        const u = JSON.parse(user)
        setName(_name)
        setId(u.data.id)
        let result = await fetch(`http://localhost:5000/v1/follow/getfollowers?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + u.token,
            }
        }
        );
        result = await result.json();

        if (result) {
            // console.log(result);
            setData(result.data);
        }
    }

    useEffect(() => {
        searchHandle()
    })

    const renderItem = ({ item }) => (
        <View style={styles.contaner}>
            <View style={styles.mainprofilecomp}>
                <TouchableOpacity style={styles.profileimgandname} onPress={() => { navigation.navigate("SearchProfile", { id: item._id }) }}>
                    <Image resizeMode='contain' source={require('../../../assets/Profile.png')} style={styles.profileimg} />
                    <View style={styles.nameandno}>
                        <TouchableOpacity style={styles.name}>{item.name}</TouchableOpacity>
                        <Text style={styles.star}>
                            <Icon name="star" color='white' size={18} style={styles.arrowback} />
                            <Icon name="star" color='white' size={18} style={styles.arrowback} />
                            <Icon name="star" color='white' size={18} style={styles.arrowback} />
                            <Icon name="star" color='white' size={18} style={styles.arrowback} />
                        </Text>
                    </View>
                </TouchableOpacity>

                {/* <Text>{JSON.stringify(itemId)}</Text> */}
            </View>
        </View>
    )
    return (
        <>
            <CircleListHeader />
            <Container>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                />
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
    },
    main: {
        paddingTop: 10
    },
    // addto circle
    mainprofilecomp: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 0
    },
    profileimg: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 10
    },
    profileimgandname: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        height: 60,
    },
    nameandno: {
        height: 40,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 4,
        color: Theme.colors.textColor
    },
    phoneNo: {
        fontSize: 13
    },
    invite: {
        color: '#a567be',
        fontSize: 16,
        // textTransform:'uppercase'
    }

})

export default CircleList;