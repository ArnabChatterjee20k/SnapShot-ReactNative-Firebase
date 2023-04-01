import { View, Text } from "react-native";
import React from "react";
import { useAuthContext } from "../context/AuthContext";

import BottomNavigation, {
  FullTab,
} from "react-native-material-bottom-navigation";
import { Title, Container } from "../Styles/Styles";
import NavWrapper from "./NavWrapper";

export default function Home() {
  // const {user} = useAuthContext()
  return (
    <NavWrapper>
      <Container>
        <Title>Hello</Title>
      </Container>
    </NavWrapper>
  );
}
