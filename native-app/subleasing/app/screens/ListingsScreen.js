import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import SearchComponent from "./SearchComponent";

// const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11 ,12];
const list = [
  { id: 1, name: "Quarters: Nueces House", image: require('../assets/quarters-pic.png'), price: 950, rooms: "3x3", rating: 3.5 },
  { id: 2, name: "The Block", image: require('../assets/block.jpeg'), price: 999, rooms: "4x4", rating: 3 },
  { id: 3, name: "The Castillian", image: "../assets/quarters-pic.png", price: 970 },
  { id: 4, name: "The Callaway", image: "../assets/quarters-pic.png", price: 979 },
  { id: 5, name: "21 Pearl", image: "../assets/quarters-pic.png", price: 989 },
  { id: 6, name: "Skyloft", image: "../assets/quarters-pic.png", price: 969 },
  { id: 7, name: "Lark", image: "../assets/quarters-pic.png", price: 975 },
];
export default function ListingsScreen({route, navigation}) {

  const [posts, setPosts] = useState(list);


  const renderPosts = ({item}) => {
    return (
      <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Result", item)}
      >
      <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const search = term => {
    const result = list.filter(object => object.name.toUpperCase().indexOf(term.toUpperCase()) > -1);
    setPosts(result);
  };


  return (
    <View style={styles.container}>
      <View>
            <TextInput 
            style={styles.search}
            placeholder="Search"
            placeholderTextColor="black"
            onChangeText={(newText) => {
              search(newText)
            }}
            />
      </View>
      <FlatList
        data={posts}
        //numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={renderPosts}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    padding: 10,
    borderRadius: 15,
},
  container: {
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  card: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    margin: 5,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5, 
  },
  text: {
    color: "#085bc7",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Didot",
  },
});
