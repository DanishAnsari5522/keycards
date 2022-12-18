import React from 'react'
import { View, Text ,TouchableOpacity, StyleSheet} from 'react-native'
import Theme from '../../component/Theme'
import { useNavigation } from '@react-navigation/native';

function Links() {
     const navigate=useNavigation();
    return (
        <View>
            <View>
            <TouchableOpacity><Text style={styles.option}>Setting</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.option}>Update Profile</Text></TouchableOpacity>
        </View>
        </View>
    )
}

const styles=StyleSheet.create({
    option: {
        color: Theme.colors.textColor,
        marginTop: 5,
        fontSize: 16
    }
})

export default Links;