import { View, Text } from "react-native";
import React from "react";
import Button from "react-native-ui-lib/button";
import { Colors } from "react-native-ui-lib";
import { windowHeigth, windowWidth } from "../utils/getDimension";

export default function FormButton({ buttonTitle , ...props}) {
  console.log(props)
  return (
    <View>
      <Button
        label={buttonTitle}
        size={Button.sizes.small}
        borderRadius={50}
        color={Colors.white}
        style={{ width: windowWidth / 1.3, height: windowHeigth / 18 }}
        labelStyle={{ fontWeight: "bold" }}
        {...props}
      />
    </View>
  );
}
