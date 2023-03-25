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
