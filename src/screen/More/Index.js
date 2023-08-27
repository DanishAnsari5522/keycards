import React from 'react'
import { View, Text, Dimensions, Modal, TouchableWithoutFeedback, StyleSheet, TouchableOpacity } from 'react-native'
import Theme from '../../component/Theme';
import Icon1 from '@expo/vector-icons/Entypo';
import Links from './Links'


export class More extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    show = () => {
        this.setState({ show: true })
    }
    close = () => {
        this.setState({ show: false })
    }

    renderOutsideTouchable(onTouch) {
        const view = <View style={{ flex: 1, width: '50%', height: '100%' }} />
        if (!onTouch) return view

        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{ flex: 1, width: '50%', hright: '100%' }} >
                {view}
            </TouchableWithoutFeedback>

        )
    }

    render() {
        let { show } = this.state
        const { onTouchOutside } = this.props

        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
                style={{ alignSelf: 'flex-end' }}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: '#000000AA',
                    justifyContent: 'flex-end',
                }}>
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style={{
                        backgroundColor: 'red',
                        width: '60%',
                        paddingHorizontal: 10,
                        Height: 200,
                        marginLeft: '40%',
                        position:'absolute',
                        top:0
                    }}>
                        <View style={{ height: '100%' }}>
                            <Icon1 name="cross" color="white" size={30} style={{ marginTop: 15, paddingLeft: -20, marginBottom: 10 }} onPress={this.close} />
                            <View style={styles.foricon}>
                                <Links />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    foricon: {
    },
    icon: {
        width: 55,
        height: 55,
        padding: 12,
        borderRadius: 40,
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 10
    },

})