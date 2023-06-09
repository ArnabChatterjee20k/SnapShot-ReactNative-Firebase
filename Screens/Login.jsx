import { useState } from "react";
import {
  View,
  Colors,
  Dash,
  Text,
  TouchableOpacity
} from "react-native-ui-lib";

import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import SignInWrapper from "../components/SignInWrapper";
import SocialButton from "../components/SocialButton";
import { windowWidth } from "../utils/getDimension";
import useFirebaseAuth from "../hooks/useFirebaseAuth";
import { exceptionHandler } from "../utils/exceptionHandler";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigation()
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

  const { logUser } = useFirebaseAuth();
  const login = async () => {
    const [data, error] = await exceptionHandler(logUser, {
      email,
      password,
    });
    if (error) {
      SignInWrapper.showToast({
        title: "Authentication Error",
        message: error.code,
        type: "error",
      });
    }
  };

  return (
    <SignInWrapper heading="Sign In">
      <View style={{ paddingVertical: 10, alignItems: "center", gap: 15 }}>
        <View style={{ gap: 10, width: "100%" }}>
          {fields.map(({ ...props }, index) => (
            <FormInput {...props} key={index} />
          ))}
        </View>
        <FormButton buttonTitle="Log In" onPress={login} />
        <View style={{ marginTop: 50, alignItems: "center", gap: 40 }}>
          <Dash length={windowWidth} thickness={3} color={Colors.grey60} />
          <SocialButton />
        </View>

        <TouchableOpacity onPress={()=>nav.navigate("Register")}>
          <Text
            text70M
            underline
            style={{
              color: Colors.$textPrimary,
              fontWeight: "bold",
            }}
          >
            Don't Have An Account? Create One
          </Text>
        </TouchableOpacity>
      </View>
      {/* <SignInWrapper.Toast/> */}
    </SignInWrapper>
  );
}
