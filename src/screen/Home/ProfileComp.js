import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Theme from '../../component/Theme';
import Icon from '@expo/vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FlatGrid } from 'react-native-super-grid';


function ProfileComp() {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [cards, setCards] = useState([]);
    let u;

    let getCurrentUser = async () => {
        let user = await AsyncStorage.getItem("currentUser")
        u = JSON.parse(user)
        // setName(u.data.name);
        console.log(u.data.id);
        let result = await fetch(`https://keycards-api.onrender.com/v1/user?id=${u.data.id}`, {
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
            setData(result.data);
        }
    }

    const getCords = async () => {
        let user = await AsyncStorage.getItem("currentUser")
        u = JSON.parse(user)
        let result = await fetch(`https://keycards-api.onrender.com/v1/post/getuserposts?id=${u.data.id}`, {
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
            setCards(result.data);
        }
    }

    useEffect(() => {
        getCurrentUser()
        getCords()
    }, [])

    return (
        <>
            <View style={styles.main}>
                <View style={styles.postandcircle}>
                    <Image source={require('../../../assets/Profile.png')} style={styles.profileimg} />
                    <TouchableOpacity style={styles.post}>
                        <Text style={styles.no}>{data.posts}</Text>
                        <Text style={styles.no}>Cards</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate("CircleList")}>
                        <Text style={styles.no}>{data.followers}</Text>
                        <Text style={styles.no}>Circle</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.nameandrank}>
                    <Text style={styles.name}>{data.name}</Text>
                    {/* <Text style={styles.star}>
                        <Icon name="star" color='white' size={18} style={styles.arrowback} />
                        <Icon name="star" color='white' size={18} style={styles.arrowback} />
                        <Icon name="star" color='white' size={18} style={styles.arrowback} />
                        <Icon name="star" color='white' size={18} style={styles.arrowback} />
                    </Text> */}
                </View>
                <View>
                    <Text style={styles.card}>Cards List</Text>
                    <FlatGrid
                        itemDimension={200}
                        data={cards}
                        style={styles.gridView}
                        spacing={10}
                        renderItem={({ item }) => (
                            <View style={[styles.itemContainer, { backgroundColor: Theme.colors.cardcolor ,borderRadius:4,padding:20,width:200,height:100}]}>
                                <Text style={styles.itemName}>{item.cardkey}</Text>
                                <Text style={styles.itemCode}>{item.cardkey}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>

        </>
    )
}


const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    //
    gridView: {
        marginTop: 10,
        flex: 1,
      },
    //
    main: {
        height: windowHeight,
        paddingTop: 20
    },
    postandcircle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 50
    },
    profileimg: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    post: {
        alignItems: 'center'
    },
    circle: {
        alignItems: 'center'
    },
    no: {
        color: Theme.colors.textColor,
        fontSize: 17
    },
    nameandrank: {
        marginTop: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    name: {
        fontSize: 18,
        color: Theme.colors.textColor
    },
    star: {
        marginBottom: 20
    },
    card: {
        color: Theme.colors.textColor,
        marginTop: 20
    },
    cardslist: {
        flexDirection: 'row',
    },
    cardcom: {
        width: 102,
        height: 102,
        backgroundColor: Theme.colors.cardcolor,
        borderRadius: 10,
        margin: 10,
    },

    //for cards list 

    contaner: {
        width: '100%',
        // flexDirection: 'row'
        flexDirection: 'row'
    },
    usercard: {
        width: '33%',
        height: 100,
        flexDirection: 'row'
    }

})

export default ProfileComp;