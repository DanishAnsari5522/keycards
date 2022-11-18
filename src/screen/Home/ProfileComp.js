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
                    <Text>10</Text>
                    <Text>Post</Text>
                </View>
                <View style={styles.circle}>
                    <Text>circle</Text>
                </View>
            </View>
            <View>
                <Text>Danish Ansari</Text>
                <Text>
                    <Icon name="star" color='white' size={18} style={styles.arrowback} />
                    <Icon name="star" color='white' size={18} style={styles.arrowback} />
                    <Icon name="star" color='white' size={18} style={styles.arrowback} />
                    <Icon name="star" color='white' size={18} style={styles.arrowback} />
                </Text>
            </View>
        </View>
    )
}


const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    main: {
        height: windowHeight,
    },
    postandcircle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profileimg: {
        width: 50,
        height: 50,
        borderRadius: 50,
    }



})

export default ProfileComp;