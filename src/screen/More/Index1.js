import React from 'react'
import { View, Text, Dimensions, Modal, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import Theme from '../../component/Theme';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

const deviceHeight = Dimensions.get('window').height;
export class More1 extends React.Component {
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
        const view = <View style={{ flex: 1, width: '100%' }} />
        if (!onTouch) return view

        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{ flex: 1, width: '100%' }} >
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
            >
                <View style={{
                    flex: 1,
                    backgroundColor: '#000000AA',
                    justifyContent: 'flex-end',
                }}>
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style={{
                        backgroundColor: Theme.colors.cardcolor,
                        width: '99%',
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        paddingHorizontal: 10,
                        maxHeight: deviceHeight
                    }}>
                        <View style={{ height: 200 }}>
                            <View style={styles.foricon}>
                                <Icon name="share-variant-outline" color="white" size={20} style={styles.icon} />
                                <Icon name="message-outline" color="white" size={25} style={styles.icon} />
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
        flexDirection: 'row',
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

    }
})