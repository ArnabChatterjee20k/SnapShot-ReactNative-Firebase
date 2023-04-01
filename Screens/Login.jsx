import { useState } from 'react';
import {
  View,
  Colors,
  Dash,
  Text,
  TouchableOpacity,
} from "react-native-ui-lib";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import SignInWrapper from "../components/SignInWrapper";
import SocialButton from "../components/SocialButton";
import { windowWidth } from "../utils/getDimension";
import useFirebaseAuth from '../hooks/useFirebaseAuth';

export default function Login() {
  const [email,setEmail] = useState("asdf")
  const [password,setPassword] = useState("adfs")
  const fields = [
    { icon: "user", placeholder: "Enter your email" ,value:email,setter:setEmail},
    { icon: "lock", placeholder: "Enter your password" , value:password,setter:setPassword},
  ];

  const login = async()=>{
    try{
      const data = "lsdjfl"
      console.log((data));
    }
    catch(e){
      console.log(e.message);
    }
  }
  return (
    <SignInWrapper>
      <View style={{ paddingVertical: 10, alignItems: "center", gap: 15 }}>
        <View style={{ gap: 10, width: "100%" }}>
          {fields.map(({...props}) => (
            <FormInput {...props} />
          ))}
        </View>
        <FormButton buttonTitle="Log In" onPress={login}/>
        <View style={{ marginTop: 50, alignItems: "center", gap: 40 }}>
          <Dash length={windowWidth} thickness={3} color={Colors.grey60} />
          <SocialButton />
        </View>

        <TouchableOpacity>
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
    </SignInWrapper>
  );
}
