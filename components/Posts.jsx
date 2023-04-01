import { View, Text, Image } from "react-native";
import React from "react";
import {
  Card,
  Content,
  Header,
  HeaderSubText,
  HeaderText,
} from "../Styles/Card.Styles";
import { Avatar } from "react-native-ui-lib";

export default function Posts() {
  return (
    <Card>
      <Header>
        <Avatar
          source={{
            uri: "https://lh3.googleusercontent.com/-cw77lUnOvmI/AAAAAAAAAAI/AAAAAAAAAAA/WMNck32dKbc/s181-c/104220521160525129167.jpg",
          }}
        />
        <View>
          <HeaderText>Arnab</HeaderText>
          <HeaderSubText>Arnab</HeaderSubText>
        </View>
      </Header>
      <Content>
        <Text style={{ fontWeight: "500" }}>Hello</Text>
      </Content>
      <Image source={require("../assets/OnboardingUI-2.png")} />
    </Card>
  );
}
