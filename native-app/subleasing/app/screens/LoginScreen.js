import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, TextInput} from 'react-native';

function LoginScreen(props) {

    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    //const [number, onChangeNumber] = React.useState(null);

    return (
        <View style = {styles.container}>
            <Text>Welcome to Austin Subleasing</Text>
            <TextInput
            style={styles.input}
            onChangeText={onChangeUsername}
            value={username}
            placeholder="username"
            />
            <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="password"
            //keyboardType="numeric"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "sans-serif"
    },
    input: {
        height: 40,
        width: "50%",
        margin: 10,
        borderWidth: .75,
        //padding: 10,
        paddingHorizontal: 60,
        borderRadius: 5,
        
      },

})

export default LoginScreen;