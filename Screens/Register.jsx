import SignInWrapper from "../components/SignInWrapper";
import React, { useState } from "react";
import useFirebaseAuth from "../hooks/useFirebaseAuth";
import { windowWidth } from "../utils/getDimension";
import {
  View,
  Colors,
  Dash,
  Text,
  TouchableOpacity,
} from "react-native-ui-lib";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
import FormInput from "../components/FormInput";
import { useNavigation } from "@react-navigation/native";
import { exceptionHandler } from "../utils/exceptionHandler";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigation();
  const fields = [
    {
      icon: "user",
      placeholder: "Enter your email",
      value: email,
      setter: setEmail,
    },
    {
      icon: "lock",
      placeholder: "Enter your password",
      value: password,
      setter: setPassword,
    },
  ];

  const { createUser } = useFirebaseAuth();

  const create = async () => {
    const [data, error] = await exceptionHandler(createUser, {
      email,
      password,
    });
    console.log(data)
    if (error) {
      SignInWrapper.showToast({
        title: "Authentication Error",
        message: error.code,
        type: "error",
      });
    }
  };

  return (
    <SignInWrapper heading="Register">
      <View style={{ paddingVertical: 10, alignItems: "center", gap: 15 }}>
        <View style={{ gap: 10, width: "100%" }}>
          {fields.map(({ ...props }, index) => (
            <FormInput {...props} key={index} />
          ))}
        </View>
        <FormButton buttonTitle="Sign Up" onPress={create}/>
        <View style={{ marginTop: 50, alignItems: "center", gap: 40 }}>
          <Dash length={windowWidth} thickness={3} color={Colors.grey60} />
          <SocialButton />
        </View>

        <TouchableOpacity onPress={() => nav.navigate("Login")}>
          <Text
            text70M
            underline
            style={{
              color: Colors.$textPrimary,
              fontWeight: "bold",
            }}
          >
            Aready Have An Account? LogIn
          </Text>
        </TouchableOpacity>
      </View>
    </SignInWrapper>
  );
}
