import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import Theme from "../component/Theme";

function ChatScreenHeader() {
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.headercomp}>
                <View style={styles.ds}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Home') }}><Icon name="arrow-back" color='gray' size={25} style={styles.arrowback} /></TouchableOpacity>
                    <Text style={styles.headernamee}>Danish Ansari</Text>
                </View>
            </View>
        </View>
    )
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    headercomp: {
        width,
        height: 60,
        paddingHorizontal: 20,
        backgroundColor: Theme.colors.headerBackground,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:30
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

export default ChatScreenHeader;