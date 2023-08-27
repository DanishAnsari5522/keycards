import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Theme from "../../component/Theme";
import HomeScreenHeader from "../../Header/HomeScreenHeader";
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { BottomPopup } from "../BottomPopup/Index";
import AsyncStorage from '@react-native-async-storage/async-storage'

function HomeContent({ navigation }) {
    let popupRef = React.createRef()
    const [more, setMore] = useState(false)
    const [data, setData] = useState([]);
    let u;

    let getCards = async () => {
        let user = await AsyncStorage.getItem("currentUser")
        u = JSON.parse(user)
        // setName(u.data.name);
        console.log(u.data.id);
        let result = await fetch(`https://keycards-api.onrender.com/v1/post/`, {
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
            var data1 = result.data.reverse();
            setData(data1);
        }
    }

    const onShowPopup = () => {
        popupRef.show()
    }

    const onClosePopup = () => {
        popupRef.close()
    }

    const toggleShowMore = () => {
        setMore(!more)
    }

    useEffect(() => {
        getCards()
    }, [])

    const renderItem = ({ item }) => (
        <View style={styles.contaner}>
            <View style={styles.usercard}>
                <TouchableOpacity style={styles.usernameandimg} onPress={() => { navigation.navigate("ProfileHome", { id: item.postedby._id }) }}>
                    <Image source={require('../../../assets/Profile.png')} style={styles.userprofilepic} />
                    <View>
                        <Text style={styles.username}>{item.postedby.name}</Text>

                        <Text style={styles.lastmsg}>{item.datetime}</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.msgtime}>
                    <TouchableWithoutFeedback onPress={onShowPopup}>
                        <Icon name="dots-vertical" color="white" size={20} />
                    </TouchableWithoutFeedback>
                </Text>
            </View>
            <View style={styles.cardarea}>
                <Text style={styles.card}>{item.cardkey}</Text>
            </View>
            <View style={styles.cardfooter}>
                <Text style={styles.redeem}>redeem</Text>
                <Icon name="message-outline" color="white" size={25} />
            </View>
            <Text numberOfLines={!more ? 1 : undefined} onPress={toggleShowMore} ellipsizeMode='tail' style={{ color: Theme.colors.textColor, paddingHorizontal: 15 }}>{item.description}</Text>
        </View>
    )
    return (
        <>
            <View style={styles.navigation}>
                <HomeScreenHeader />
            </View>
            <View style={styles.d}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                />
            </View>
            <BottomPopup
                ref={(target) => popupRef = target}
                onTouchOutside={onClosePopup}
            />
        </>
    )

}
const { height } = Dimensions.get("window")

const styles = StyleSheet.create({
    contaner: {
        // height: 250,
        paddingVertical: 10,
        backgroundColor: Theme.colors.cardcolor,
        marginBottom: 15,
    },
    d: {
        height: height - 100,
        backgroundColor: Theme.colors.background
    },
    text: {
        color: Theme.colors.textColor
    },
    navigation: {
        height: 60,
        marginTop: 25
    },

    // cards
    usercard: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        paddingBottom: 0,
        paddingHorizontal: 12

    },
    usernameandimg: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userprofilepic: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10
    },
    username: {
        fontSize: 18,
        color: Theme.colors.textColor
    },
    lastmsg: {
        fontSize: 12,
        marginLeft: 4,
        color: Theme.colors.textColor
    },
    msgtime: {
        fontSize: 14,
    },

    cardarea: {
        height: 140,
        paddingLeft: 12,
        // backgroundColor: 'gray',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardfooter: {
        height: 50,
        paddingHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    redeem: {
        color: Theme.colors.textColor,
        fontSize: 18
    },
    card: {
        color: Theme.colors.textColor
    }

})

export default HomeContent;