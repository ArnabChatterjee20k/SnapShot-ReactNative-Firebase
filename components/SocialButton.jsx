import { View, Text } from "react-native";
import React from "react";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

import {
  FacebookSocialButton,
  GoogleSocialButton,
} from "react-native-social-buttons";

WebBrowser.maybeCompleteAuthSession();

export default function SocialButton() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "380957708851-f90bndntfngtcmp5r9t20kfcls9bmik9.apps.googleusercontent.com",
    clientId:"380957708851-f90bndntfngtcmp5r9t20kfcls9bmik9.apps.googleusercontent.com"
  });
  return (
    <View style={{ gap: 5 }}>
      <GoogleSocialButton onPress={()=>promptAsync()}/>
      <FacebookSocialButton />
    </View>
  );
}