import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Row } from "react-native-responsive-grid";

export function ApartmentTile(props) {
  // Use the value passed in (ie. in test_screen where we say val1={object.val1}) as the initial value
  const [val1, setVal1] = useState(props.val1);

  // We're just displaying a simple box with its value
  return (
    <View
      style={{
        backgroundColor: props.color,
        height: 400,
      }}
    >
      <Text>Apartment: {props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'grey',
    width: "100%",
    height: "100%",
    // marginBottom: '20px',
  },
});
