import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { useAuthContext } from "../context/AuthContext";
import { Text } from "react-native-ui-lib";
import { useFirebase } from "../utils/useFirebase";
import AppStack from "./AppStack";
export default function Routes() {
  const { user } = useAuthContext();
  console.log(user);
  const { auth } = useFirebase();
  return (
    <NavigationContainer>
      {/* {user ? <AppStack /> : <AuthStack />} */}
      <AppStack /> 
    </NavigationContainer>
  );
}