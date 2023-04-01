import React from "react";
import { NavbarStyle, Logo } from "../Styles/Navbar.styles";
import { TouchableOpacity } from "react-native-ui-lib";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Navbar() {
  return (
    <NavbarStyle>
      <Logo source={require("../assets/Logo.png")} />
      <TouchableOpacity >
        <AntDesign name="plus" size={25}/>
      </TouchableOpacity>
    </NavbarStyle>
  );
}
