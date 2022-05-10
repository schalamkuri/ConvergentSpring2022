import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import { useNavigation, useNavigationParam } from '@react-navigation/native';
//import FastImage from 'react-native-fast-image';
import StarRating from 'react-native-star-rating';

export default function ResultScreen({route, navigation}) {

    const object = route.params;

    return (
        <SafeAreaView style={styles.general}>
            <Image 
            source={object.image} 
            style={styles.quarters}
            />
            <View style = {styles.name}>
                <Text style={styles.generalText}
                >{object.name}</Text>
            </View>
            <View style = {styles.name}>
                <Text style={styles.generalText}
                >{object.rooms}</Text>
            </View>
            <View style = {styles.name}>
                <Text style={styles.generalText}
                >${object.price}/Month</Text>
            </View>
            <StarRating
            disabled={false}
            maxStars={5}
            rating={object.rating}
            halfStarEnabled={true}
            fullStarColor="orange"
            emptyStarColor='orange'
            />
            <TouchableOpacity style={styles.lister}> 
                <Text style={styles.generalText}>
                    Message Lister
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
        
    );
}
const styles = StyleSheet.create({
    quarters : {
        borderRadius: 15,
        width: '90%',
        height: undefined,
        aspectRatio: 1,
        marginBottom: 20,
    },
    general: {
        alignItems: 'center',
    },
    name: {

        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: "white",
        paddingHorizontal: "10%",
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
    },
    lister: {
        padding: 20,
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 150,
        borderRadius: 10,
        backgroundColor: "white",
        paddingHorizontal: "10%",
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