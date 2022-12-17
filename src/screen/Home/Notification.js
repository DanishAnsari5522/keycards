import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native'
import Container from "../../component/Container";
import Theme from "../../component/Theme";
import NotificationScreenHeader from "../../Header/NotificationScreenHeader";
import Icon from '@expo/vector-icons/MaterialIcons'
import profile from '../../../assets/Profile.png';


function Notification() {
    return (
        <>
            <NotificationScreenHeader />
            <Container>
                
                <ScrollView>
                    <View style={styles.card}>
                        <Text style={styles.date}>Today</Text>
                        <View style={styles.carddetail}>
                            <View style={styles.offericon}>
                                <Image source={profile} style={styles.img} />
                            </View>
                            <View>
                                <Text style={styles.offerdetail}>Danish Ansari</Text>
                                <Text style={styles.offerdetail1}>Added You</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.date}>Yestarday</Text>
                        <View style={styles.carddetail}>
                            <View style={styles.offericon}>
                                <Image source={profile} style={styles.img} />
                            </View>
                            <View>
                                <Text style={styles.offerdetail}>Ashutosh Tiwari</Text>
                                <Text style={styles.offerdetail1}>Reedeem Your Coupan</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.date}>December 10,2024</Text>
                        <View style={styles.carddetail}>
                            <View style={styles.offericon}>
                                <Image source={profile} style={styles.img} />
                            </View>
                            <View>
                                <Text style={styles.offerdetail}>Deepak Kumar</Text>
                                <Text style={styles.offerdetail1}>Added You</Text>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </Container>


        </>
    )

}

const { width } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        width,
        alignItems: "center",
        justifyContent: "space-between",
    },
    card: {
        width: '100%'
    },
    carddetail: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddddda',
        padding: 15,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    date: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10,
        color: 'white'
    },
    offerdetail: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white'
    },
    offerdetail1: {
        fontSize: 14,
        color: 'gray'
    },
    offericon: {
        width: 50,
        height: 50,
        backgroundColor: '#ddddda',
        borderRadius: 40,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 40,
    }

})

export default Notification;