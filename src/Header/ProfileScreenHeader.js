import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import Theme from "../component/Theme";
// import { BottomPopup } from ".././BottomPopup/Index";
// import { BottomPopup } from '../screen/BottomPopup/Index';
import { More } from '../screen/More/Index';


function ProfileScreenHeader() {
    const navigation = useNavigation();
    let popupRef = React.createRef()
    const onShowPopup = () => {
        popupRef.show()
    }

    const onClosePopup = () => {
        popupRef.close()
    }
    return (
        <View>
            <View style={styles.headercomp}>
                <View style={styles.ds}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Home') }}><Icon name="arrow-back" color='gray' size={25} style={styles.arrowback} /></TouchableOpacity>
                    <Text style={styles.headernamee}></Text>
                </View>
                <TouchableOpacity onPress={onShowPopup}><Ionicons name="menu-outline" color='gray' size={30} style={styles.arrowback} /></TouchableOpacity>
            </View>
            <More
                ref={(target) => popupRef = target}
                onTouchOutside={onClosePopup}
            />
        </View>
    )
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    headercomp: {
        width: width,
        height: 60,
        paddingHorizontal: 20,
        backgroundColor: Theme.colors.headerBackground,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },
    ds: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrowback: {
        marginRight: 5,
        color: Theme.colors.textColor
    },
    headernamee: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
        color: Theme.colors.textColor
    },

})

export default ProfileScreenHeader;