import { Image,View, Text, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import globalStyle from '@/app/style/globalstyle'
import { useUserStore } from '@/app/store/userState'

const Hometabs = () => {
  const [formattedDate, setFormattedDate] = useState('')
 
  useEffect(() => {
    const date = new Date()
    const day = date.getDate()
    const monthNames = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ]
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    
    setFormattedDate(`${day} de ${month} del ${year}`)
  }, [])

  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyle.container2}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}>{formattedDate}</Text>
        <ImageBackground
          source={require("@/assets/images/dialogo.png")}
          style={{ width: 254, height: 120, marginBottom: 0, alignItems: 'center',paddingTop:33}}
        >
          <Text style={{ color: 'black', fontSize: 16 }}>Bienvenido {}</Text>
        </ImageBackground>
        <Image
          source={require("@/assets/images/cathome.png")}
          style={{ width: 254, height: 150, marginBottom: 0}}
        />
        <View style={globalStyle.homecat}>
          {/* Additional content can go here */}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Hometabs