import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLaout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login/index" options={{ title: 'Login' }} />
        <Stack.Screen name="home/index" options={{ title: 'Home' }} />
        <Stack.Screen name='addestado/index' options={{ title: 'Estado' }} />
    </Stack>
  )
}

export default StackLaout