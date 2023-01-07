import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Theme from '../../component/Theme';
import Icon from '@expo/vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'


function ProfileComp() {
    const navigate = useNavigation();
    const [data, setData] = useState([]);
    const [cards, setCards] = useState([]);
    let u;

    let getCurrentUser = async () => {
        let user = await AsyncStorage.getItem("currentUser")
        u = JSON.parse(user)
        // setName(u.data.name);
        console.log(u.data.id);
        let result = await fetch(`http://localhost:5000/v1/user?id=${u.data.id}`, {
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
        let result = await fetch(`http://localhost:5000/v1/post/getuserposts?id=${u.data.id}`, {
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
                    <View style={styles.post}>
                        <Text style={styles.no}>{data.posts}</Text>
                        <Text style={styles.no}>Cards</Text>
                    </View>
                    <View style={styles.circle}>
                        <Text style={styles.no}>{data.followers}</Text>
                        <Text style={styles.no}>Circle</Text>
                    </View>
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
                        {
                            cards.map((item, index) => {
                                return (
                                    <View style={styles.cardcom}>
                                        <Text>{item.cardkey}</Text>
                                        <Text>{item.description}</Text>
                                        <Text>{item.validupto}</Text>
                                    </View>
                                )
                            })
                        }
                </View>
            </View>

        </>
    )
}


const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
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
        margin: 10
    }



})

export default ProfileComp;