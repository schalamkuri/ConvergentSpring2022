import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import WelcomeScreen from './WelcomeScreen';

function LoginScreen ({route, navigation}) {

    //const navigation = useNavigation();

    // access data base and verify if valid username and password
    // then allow to navigate to next page
    var authenticate = () => {
        
        navigation.navigate("Home");
    }


    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    //const [number, onChangeNumber] = React.useState(null);
    //const login = navigation.navigate("WelcomeScreen");

    return (
        //  
        <SafeAreaView style={styles.background}>
            <Text style={styles.welcome}>Renters Portal</Text>
            <SafeAreaView style = {styles.container}>
            <TextInput
            style={styles.input}
            onChangeText={onChangeUsername}
            value={username}
            placeholder="username"
            />
            <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={onChangePassword}
            value={password}
            placeholder="password"
            //keyboardType="numeric"
            
            />
            
            <TouchableOpacity style={styles.loginButton}
            onPress ={authenticate}
            > 
                <Text style={styles.loginText}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.generalButton}>
                    Sign Up
                </Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={styles.generalButton}>
                    Forgot Password
                </Text>
            </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        //flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        paddingVertical: 50,
        paddingHorizontal: 30,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 5, 
    },
    welcome: {
        // flex: 1,
        fontSize: 40,
        padding: 10,
        fontWeight: "bold",
        // //backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
         fontFamily: "Didot"
    },
    input: {
        flexDirection: "row",
        height: 40,
        //width: 5,
        margin: 10,
        //paddingVertical: 10,
        borderWidth: .75,
        //padding: 10,
        paddingHorizontal: 60,
        borderRadius: 5,
      },
    generalButton: {
        fontSize: 15,
        margin: 5,
    },
    loginButton: {
        //color: "white",
        margin: 10,
        marginBottom: 20,
        paddingVertical: 30,
        //paddingBottom: 20,
        borderRadius: 7.5,
        backgroundColor: "black",
        paddingHorizontal: 50,
        paddingVertical: 5,
       
    },
    loginText: {
        fontSize: 20,
        color: "white",
    },

})

export default LoginScreen;