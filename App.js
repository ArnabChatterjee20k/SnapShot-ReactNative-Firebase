import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoardingScreen from './Screens/OnBoardingScreen';
import Login from './Screens/Login';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
  const [isFirstLaunch,setIsFirstLaunch] = useState(null)

  useEffect(() => {
    AsyncStorage.getItem("isFirst").then(value=>{
      if(value === null){
        AsyncStorage.setItem("isFirst",'true').then(()=>setIsFirstLaunch(true));
      }
      else{
        setIsFirstLaunch(false)
      }
    })
  }, [])
  
  const Stack = createNativeStackNavigator();
  if(isFirstLaunch) return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='OnBoarding' component={OnBoardingScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  

  return <Login/>
}