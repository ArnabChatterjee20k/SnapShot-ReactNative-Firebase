import { Text } from "react-native-ui-lib";
import React from "react";

export default function Heading({ text, ...styles }) {
  return (
    <Text text30 style={{ fontWeight: "bold", ...styles }}>
      {text}
    </Text>
  );
}
