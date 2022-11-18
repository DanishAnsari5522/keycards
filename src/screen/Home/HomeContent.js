import React from "react";
import { View, Text, ScrollView ,StyleSheet} from 'react-native';
import Theme from "../../component/Theme";

function HomeContent() {
    return (
        <>
            <View style={styles.contaner}>
                <ScrollView>
                    <Text style={styles.text}>HomeContent Screen</Text>
                    <Text style={styles.text}>HomeContent Screen</Text>
                    <Text style={styles.text}>HomeContent Screen</Text>
                    <Text style={styles.text}>HomeContent Screen</Text>
                    <Text style={styles.text}>HomeContent Screen</Text>
                    <Text style={styles.text}>HomeContent Screen</Text>
                    <Text style={styles.text}>HomeContent Screen</Text>
                    <Text style={styles.text}>HomeContent Screen</Text>
                    <Text style={styles.text}>HomeContent Screen</Text>
                    <Text style={styles.text}>HomeContent Screen</Text>
                    <Text style={styles.text}>HomeContent Screen</Text>
                    <Text style={styles.text}>HomeContent Screen</Text>
                    <Text style={styles.text}>HomeContent Screen</Text>
                    <Text style={styles.text}>HomeContent Screen</Text>
                    <Text style={styles.text}>HomeContent Screen</Text>
                    <Text style={styles.text}>HomeContent Screen</Text>
                    <Text style={styles.text}>HomeContent Screen</Text>
                    <Text style={styles.text}>HomeContent Screen</Text>
                    <Text style={styles.text}>HomeContent Screen</Text>
                </ScrollView>
            </View>
        </>
    )

}

const styles=StyleSheet.create({
    contaner:{
        height:'100%',
        backgroundColor:Theme.colors.background,
        padding:Theme.padding.padding,
    },
    text:{
        color:Theme.colors.textColor
    }

})

export default HomeContent;