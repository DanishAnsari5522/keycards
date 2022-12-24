import React,{useState} from "react";
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Theme from "../../component/Theme";
import HomeScreenHeader from "../../Header/HomeScreenHeader";
import Container from "../../component/Container";
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { BottomPopup } from "../BottomPopup/Index";

const data = [
    {
        id: 1,
        username: "Danish Ansari",
        lastmsg: "hii..",
        msgtime: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
    },
    {
        id: 2,
        username: "Deepak Kumar",
        lastmsg: "haaa bhai..",
        msgtime: "publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availa"
    },
    {
        id: 3,
        username: "Ashutosh Tiwari",
        lastmsg: "kysa h",
        msgtime: "3m ago"
    },
    {
        id: 4,
        username: "Shubham Mishra",
        lastmsg: "kysa h",
        msgtime: "4m ago"
    },
    {
        id: 5,
        username: "Arvind Kumar",
        lastmsg: "kysa h",
        msgtime: "5m ago"
    },
    {
        id: 6,
        username: "Anjul Kumari",
        lastmsg: "kysa h",
        msgtime: "6m ago"
    },


]

function HomeContent() {
    let popupRef = React.createRef()
    const [more, setMore] = useState(false)

    const onShowPopup = () => {
        popupRef.show()
    }

    const onClosePopup = () => {
        popupRef.close()
    }
     
    const toggleShowMore = () =>{
        setMore(!more)
    }
    const renderItem = ({ item }) => (
        <View style={styles.contaner}>
            <View style={styles.usercard}>
                <View style={styles.usernameandimg}>
                    <Image source={require('../../../assets/Profile.png')} style={styles.userprofilepic} />
                    <View>
                        <Text style={styles.username}>{item.username}</Text>
                        <Text style={styles.lastmsg}>{item.lastmsg}</Text>
                    </View>
                </View>
                <Text style={styles.msgtime}>
                    <TouchableWithoutFeedback onPress={onShowPopup}>
                        <Icon name="dots-vertical" color="white" size={20} />
                    </TouchableWithoutFeedback>
                </Text>
            </View>
            <View style={styles.cardarea}>
                <Text style={styles.card}>Cards</Text>
            </View>
            <View style={styles.cardfooter}>
                <Text style={styles.redeem}>redeem</Text>
                <Icon name="message-outline" color="white" size={25} />
            </View>
            <Text numberOfLines={!more ? 1 : undefined} onPress={toggleShowMore} ellipsizeMode='tail' style={{color:Theme.colors.textColor,paddingHorizontal:15}}>{item.msgtime}</Text>
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