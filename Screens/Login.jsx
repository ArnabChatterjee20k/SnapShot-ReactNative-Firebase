import { Text, View } from "react-native";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import SignInWrapper from "../components/SignInWrapper";
import SocialButton from "../components/SocialButton";

const fields = [
  { icon: "user", placeholder: "Enter your email" },
  { icon: "lock", placeholder: "Enter your password" },
];

export default function Login() {
  return (
    <SignInWrapper>
      <View style={{ paddingVertical: 10, alignItems: "center", gap: 15 }}>
        <View style={{ gap: 10, width: "100%" }}>
          {fields.map(({ icon, placeholder }) => (
            <FormInput icon={icon} placeholder={placeholder} />
          ))}
        </View>
        <FormButton buttonTitle="Log In" />
      </View>
    </SignInWrapper>
  );
}
