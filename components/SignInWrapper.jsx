import { View, Text, Colors } from "react-native-ui-lib";
import React from "react";
import { windowHeigth, windowWidth } from "../utils/getDimension";
import Heading from "./Heading";
import SubHeader from "./SubHeader";
import Toast from "react-native-toast-message";
export default function SignInWrapper({ children,heading }) {
  return (
    <View
      backgroundColor={Colors.$backgroundPrimaryHeavy}
      useSafeArea
      style={{ flex: 1, paddingTop: windowHeigth / 25, gap: 30 }}
    >
      <View style={{ paddingHorizontal: windowWidth / 20, gap: 5 }}>
        <Heading text={heading} color={Colors.grey60} />
        <SubHeader
          color={Colors.grey50}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo"
        />
      </View>
      <View
        backgroundColor={Colors.grey70}
        style={{
          flex: 1,
          paddingHorizontal: windowWidth / 10,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          paddingVertical: windowHeigth / 25,
        }}
      >
        {children}
        <Toast position="bottom" />
      </View>
    </View>
  );
}

SignInWrapper.showToast = ({ title, message, type }) => {
  return Toast.show({
    type,
    text1: title,
    text2: message,
  });
};
