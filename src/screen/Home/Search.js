import React,{useState} from "react";
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import Container from "../../component/Container";
import Theme from "../../component/Theme";
import SearchScreenHeader from "../../Header/SearchScreenHeader";
import Icon from '@expo/vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Search() {
    const [name, setName] = useState('');
    const [data,setData]=useState([]);
    const searchHandle = async (_name) => {
        const user = await AsyncStorage.getItem("currentUser")
        const u = JSON.parse(user)
        setName(_name)
        // console.log(u.name);
        let result = await fetch(`http://localhost:5000/v1/user/search?name=${_name}`, {
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
    return (
        <>
            <SearchScreenHeader searchHandle={searchHandle} name={name}/>
            <Container >
                <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
                   {
                    data.map((item,index)=>{
                        return(
                            <View style={styles.mainprofilecomp}>
                            <View style={styles.profileimgandname}>
                                <Image resizeMode='contain' source={require('../../../assets/Profile.png')} style={styles.profileimg} />
                                <View style={styles.nameandno}>
                                    <Text style={styles.name}>{item.name}</Text>
                                        <Text style={styles.star}>
                                            <Icon name="star" color='white' size={18} style={styles.arrowback} />
                                            <Icon name="star" color='white' size={18} style={styles.arrowback} />
                                            <Icon name="star" color='white' size={18} style={styles.arrowback} />
                                            <Icon name="star" color='white' size={18} style={styles.arrowback} />
                                        </Text>
                                </View>
                            </View>
                            <Text style={styles.invite}>Add to Circle</Text>
                        </View>
                        )
                    })
                   }
                </ScrollView>
            </Container>

        </>
    )

}

const styles = StyleSheet.create({
    contaner: {
        height: '100%',
        backgroundColor: Theme.colors.background
    },
    search: {
        color: Theme.colors.textColor
    },
    main: {
        paddingTop: 10
    },
    // addto circle
    mainprofilecomp: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 0
    },
    profileimg: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 10
    },
    profileimgandname: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        height: 60,
    },
    nameandno: {
        height: 40,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 4,
        color: Theme.colors.textColor
    },
    phoneNo: {
        fontSize: 13
    },
    invite: {
        color: '#a567be',
        fontSize: 16,
        // textTransform:'uppercase'
    }

})

export default Search;