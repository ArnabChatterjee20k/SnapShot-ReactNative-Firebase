import { View, Text } from 'react-native'
import React from 'react'
import { useAuthContext } from '../context/AuthContext'

export default function Home() {
    const {user} = useAuthContext()
    return (
    <View>
      <Text>{user}</Text>
    </View>
  )
}