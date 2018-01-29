import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet
}from 'react-native';

export default class Home1 extends Component {

    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}
                                  activeOpacity={0.5}
                                  onPress={()=>{
                                      this.props.navigation.navigate('Details')
                                  }}>
                    <Text>
                        首页
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }

};
const styles = StyleSheet.create({

        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#099'
        },
        button: {
            width:125,
            height:80,
            borderRadius:10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00f'
        },

    }
);