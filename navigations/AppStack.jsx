import { View, Text } from "react-native";
import React from "react";
import Home from "../components/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function AppStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
