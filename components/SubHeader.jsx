import { View, Text, Colors } from "react-native-ui-lib";
import React from "react";

export default function SubHeader({ text, ...styles }) {
  return <Text style={{ fontWeight: "medium", ...styles }}>{text}</Text>;
}
