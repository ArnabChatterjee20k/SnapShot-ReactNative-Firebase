import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react'
import OnBoardingScreen from '../Screens/OnBoardingScreen';
import Login from '../Screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AuthStack() {
  const [isFirstLaunch,setIsFirstLaunch] = useState(null)
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem("isFirst").then(value=>{
      console.log(value)
      if(value === null){
        AsyncStorage.setItem("isFirst",'true').then(()=>setIsFirstLaunch(true));
      }
      else{
        setIsFirstLaunch(false)
      }
    })
  }, [])

  const Stack = createNativeStackNavigator();

  if(isFirstLaunch === null) return null;
  else if(isFirstLaunch === true) routeName = "Onboarding"
  else routeName = "Login"
  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen name='OnBoarding' component={OnBoardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}