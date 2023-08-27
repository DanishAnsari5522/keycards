import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import Container from '../../component/Container';
import ChatScreenHeader from '../../Header/ChatScreenHeader';
import UserList from './UserList';
import Theme from '../../component/Theme';
function Chat() {
    return (
        <>
            <ChatScreenHeader />
            <View style={styles.con}>
                <UserList />
                <UserList />
                <UserList />
                <UserList />

            </View>

            <Container>
    
            </Container>

        </>
    )
}

const styles=StyleSheet.create({
    con:{
        backgroundColor:Theme.colors.background
    }

})

export default Chat;