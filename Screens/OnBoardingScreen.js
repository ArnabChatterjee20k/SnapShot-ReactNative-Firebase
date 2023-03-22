import { View, Text,Image } from 'react-native' 
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import { useNavigation } from '@react-navigation/native'

export default function OnBoardingScreen() {
  // this will be shown one time only during the first open of app
  const nav = useNavigation()
  const navigateToLogin =()=>nav.replace("Login") // so that the we cant go back
  return (
    <Onboarding 
    onSkip={navigateToLogin}
    onDone={navigateToLogin}
    pages={[
      {
          backgroundColor:"#a6e4d0",
          title:"Connect to the world!",
          subtitle:"A new way to connect with the world",
          image:<Image source={require("../assets/OnboardingUI-2.png")}/>
      },
        {
            backgroundColor:"#fdeb93",
            title:"Share Your Memories",
            subtitle:"Share Your Journey with the whole world",
            image:<Image source={require("../assets/OnboardingUI-1.png")}/>
        },
        {
            backgroundColor:"#e9bcbe",
            title:"Security First",
            subtitle:"No gap in security",
            image:<Image source={require("../assets/OnboardingUI-3.png")}/>
        },
    ]}
    />
  )
}