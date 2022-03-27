import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';

function WelcomeScreen(props) {
    return (

        <ImageBackground 
        style = {styles.background}
        source={require("../assets/ut.jpg")}
        >

        </ImageBackground>
        
    );
}
/*<View style = {styles.container}>
            <Text> SOMe text</Text>
        </View>
*/

const styles = StyleSheet.create({
    background :{
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default WelcomeScreen;