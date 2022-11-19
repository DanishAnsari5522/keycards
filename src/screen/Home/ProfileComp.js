import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Theme from '../../component/Theme';
import Icon from '@expo/vector-icons/MaterialIcons'
function ProfileComp() {
    const navigate = useNavigation();
    return (
        <View style={styles.main}>
            <View style={styles.postandcircle}>
                <Image source={require('../../../assets/Profile.png')} style={styles.profileimg} />
                <View style={styles.post}>
                    <Text style={styles.no}>10</Text>
                    <Text style={styles.no}>Cards</Text>
                </View>
                <View style={styles.circle}>
                    <Text style={styles.no}>10</Text>
                    <Text style={styles.no}>Circle</Text>
                </View>
            </View>
            <View style={styles.nameandrank}>
                <Text style={styles.name}>Danish Ansari</Text>
                <Text style={styles.star}>
                    <Icon name="star" color='white' size={18} style={styles.arrowback} />
                    <Icon name="star" color='white' size={18} style={styles.arrowback} />
                    <Icon name="star" color='white' size={18} style={styles.arrowback} />
                    <Icon name="star" color='white' size={18} style={styles.arrowback} />
                </Text>
            </View>
            <View>
                <Text style={styles.card}>Cards List</Text>
                <View style={styles.cardslist}>
                    <View style={styles.cardcom}></View>
                    <View style={styles.cardcom}></View>
                    <View style={styles.cardcom}></View>
                </View>
                <View style={styles.cardslist}>
                    <View style={styles.cardcom}></View>
                    <View style={styles.cardcom}></View>
                    <View style={styles.cardcom}></View>
                </View>
            </View>
        </View>
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
    card:{
        color:Theme.colors.textColor,
        marginTop:20
    },
    cardslist:{
        flexDirection:'row',     
    },
    cardcom: {
        width: 102,
        height: 102,
        backgroundColor: Theme.colors.cardcolor,
        borderRadius: 10,
        margin:10
    }



})

export default ProfileComp;