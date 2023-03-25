import { View, Text } from "react-native";
import React from "react";
import {
  FacebookSocialButton,
  GoogleSocialButton,
} from "react-native-social-buttons";
export default function SocialButton() {
  return (
    <View style={{ gap: 5 }}>
      <GoogleSocialButton />
      <FacebookSocialButton />
    </View>
  );
}