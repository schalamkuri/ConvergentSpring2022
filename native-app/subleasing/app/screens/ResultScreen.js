import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import { useNavigation, useNavigationParam } from '@react-navigation/native';

export default function ResultScreen({route, navigation}) {
    //const name = route.params.name;
    const object = route.params;
    return (
        <Text>{object.name}</Text>
    );
}