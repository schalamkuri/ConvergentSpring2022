// import React, { useState, useEffect } from "react";
// import { ApartmentTile } from "./ApartmentTile";
// import {
//   ScrollView,
//   View,
//   Button,
//   SafeAreaView,
//   FlatList,
//   Text,
// } from "react-native";

// // for this, you'll have to run 'npm install react-native-uuid' on the command line
// import uuid from "react-native-uuid";
// //import { SafeAreaView } from 'react-native-web';

// export default function ListingsScreen() {
//   // Here, I'm just creating some hard-coded data - a list of objects
//   // (for you, this is where you'd list the apartments - eg. [{name: "21 Pearl", rent: $800, ...}, etc.])
//   // (also, don't worry about the "key" part - I can explain why we need that later if you want, but it's not too important for now)
//   const list = [
//     {
//       val1: 0,
//       key: uuid.v4(),
//       color: "black",
//       name1: "21 Pearl",
//       name2: "Block on Rio",
//     },
//     { val1: 9, key: uuid.v4(), color: "white", name: "Skyloft" },
//     { val1: 4, key: uuid.v4(), color: "grey", name: "Lark" },
//   ];
//   const [listOfTiles, setListOfTiles] = useState(list);

//   // This function sorts the three objects I created above by their "val1" field
//   const sortByVal1 = () => {
//     // Here we specify how to sort them - similar to the Java compareTo method
//     listOfTiles.sort((a, b) => (a.val1 > b.val1 ? -1 : 1));

//     // This part is a little weird, but basically this line creates a copy of the array we just sorted
//     // Because React will only re-render if the whole array changes, not just elements within the array (don't worry about this if it doesn't make sense)
//     setListOfTiles([...listOfTiles]);
//   };
//   // style={{ backgroundColor: "white" }}
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       {/* <ScrollView style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
//         {listOfTiles.map((object) => {
//           // Create a TestTile component on the screen, passing in its value
//           return (
//             <ApartmentTile
//               key={object.key}
//               val1={object.val1}
//               color={object.color}
//               name={object.name}
//             ></ApartmentTile>
//           );
//         })}
//         {/* <Button onPress={sortByVal1}/>
//       {
//         // For each object in the list we created...

//       } */}
//       {/* </ScrollView> */}
//       <FlatList
//         data={list}
//         numColumns={2}
//         // keyExtractor={(object) => object}
//         renderItem={({ key, val1, color, name }) => (
//           // <ApartmentTile
//           //   key={key}
//           //   val1={val1}
//           //   color={color}
//           //   name={name}
//           // ></ApartmentTile>
//           <View
//             style={{
//               backgroundColor: color,
//               height: 400,
//             }}
//           >
//             <Text>Apartment: {name}</Text>
//           </View>
//         )}
//       />
//     </SafeAreaView>
//   );
// }
// /*
// <View>
//       <Button onPress={sortByVal1}/>

//       {
//         // For each object in the list we created...
//         listOfTiles.map( (object) => {
//           // Create a TestTile component on the screen, passing in its value
//           return <ApartmentTile key={object.key} val1={object.val1}></ApartmentTile>
//         })
//       }

//     </View>
// */

import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

// const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11 ,12];
const list = [
  { color: "grey", name: "Quarters: Nueces House", page: "Quarters" },
  { color: "grey", name: "The Block", page: "Quarters" },
  { color: "grey", name: "The Castillian", page: "Quarters" },
  { color: "grey", name: "The Callaway", page: "Quarters" },
  { color: "black", name: "21 Pearl", page: "Quarters" },
  { color: "white", name: "Skyloft", page: "Quarters" },
  { color: "grey", name: "Lark", page: "Quarters" },
];
export default function ListingsScreen({route, navigation}) {
  //const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        //numColumns={2}
        //keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Result", item)}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  card: {
    height: 300,
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    // boxShadow: "10px 10px 0px -5px rgba(209,25,209,1)",
    margin: 5,
    borderRadius: 15,
  },
  text: {
    fontSize: 40,
    //alignItems: "center",
    fontWeight: "600",
    color: "white",
  },
});
