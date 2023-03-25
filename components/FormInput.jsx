import React from "react";
import { View, TextField, Colors } from "react-native-ui-lib";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function FormInput({ placeholder, icon }) {
  return (
    <View
      backgroundColor={Colors.grey60}
      style={{
        flexDirection: "row",
        justifyContent: "center",
        gap: 2,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 50,
        alignItems: "center",
      }}
    >
      <AntDesign name={icon} size={25} />
      <TextField
        placeholder={placeholder}
        placeholderTextColor="black"
        style={{
          paddingHorizontal: 20,
          backgroundColor: Colors.grey60,
          color: "black",
        }}
      />
    </View>
  );
}
