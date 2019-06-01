import React,{Component} from 'react';
import {Modal, StyleSheet, Button,Text, View} from 'react-native';

export default class MyModal extends Component{
    constructor(){
        super();
        this.state = {
            modalVisible: false
        }
    }

    openModal(){
        this.setState({
            modalVisible:true
        })
    }
    render(){
        return (
            <View>
                <Button title="打开弹窗" onPress={this.openModal.bind(this)}>open</Button>
                <Modal
                animationType="fade"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    this.setState({
                        modalVisible:false
                    })
                    alert("Modal has been closed.");
                }}
                >
                    <View style={{ marginTop: 22 }}>
                        <View>
                        <Text>Hello World!</Text>

                        
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}