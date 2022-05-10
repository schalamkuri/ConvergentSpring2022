import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// const screenHeight = Dimensions.get('window').height;
// const screenWidth = Dimensions.get('window').width;

function WelcomeScreen({route, navigation}) {

   // const navigation = useNavigation();

    // access data base and verify if valid username and password
    // then allow to navigate to next page
    var renters = () => {
        
        navigation.navigate("Login");
    }

    var listers = () => {
        
        navigation.navigate("Listings");
    }

    const utBackground = require("../assets/ut2.jpeg");

    return (

        // <ImageBackground
        // style = {styles.background}
        // //resizeMode="cover"
        // source={utBackground}
        // >
        //</ImageBackground>
        //
        <View style={styles.background}>
        <Text style ={styles.title}
        >SUBLEASING FOR STUDENTS</Text>
        <Text style ={styles.subtitle}
        >Making subleasing easy</Text>
        <TouchableOpacity style={styles.choice} 
        onPress={renters}> 
                <Text style={styles.generalText}>
                    Looking to rent?
                </Text>
            </TouchableOpacity>
        <TouchableOpacity style={styles.choice}
        onPress={listers}> 
                <Text style={styles.generalText}>
                    Looking to list?
                </Text>
            </TouchableOpacity>
            </View>
        
    );
}

const styles = StyleSheet.create({
    background :{
        flex: 1,
        // height: screenHeight,
        // width: screenWidth,
        //justifyContent: "center",
        alignItems: "center",
        //opacity: .7,
        color: "#e77365",
        
    },
    container: {
        flex: 1,
        backgroundColor: '#e77365',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title :{
        fontWeight: "bold",
        fontSize: 25,
        opacity: 7,
        top: "40%",
        fontFamily: "Didot",
        //flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
    },
    subtitle: {
        //fontWeight: "bold",
        //color: "grey",
        fontSize: 20,
        opacity: 7,
        top: "40%",
        fontFamily: "Didot",
        marginBottom: 30,
        // justifyContent: "center",
        // alignItems: "center",
    },
    choice: {
        //color: "blue",
        top: "40%",
        margin: 20,
        margin: 10,
        marginBottom: 20,
        paddingVertical: 30,
        //paddingBottom: 20,
        borderRadius: 10,
        backgroundColor: "white",
        paddingHorizontal: 50,
        paddingVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
    },
    generalText: {
        color: "#085bc7",
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "Didot",
    }
})

export default WelcomeScreen;