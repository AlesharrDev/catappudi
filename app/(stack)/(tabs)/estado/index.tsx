import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import globalStyle from '@/app/style/globalstyle'

const Estado = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyle.container2}>
        
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Estado