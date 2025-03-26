import { Image, View, Text, ImageBackground, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import globalStyle from "@/app/style/globalstyle";
import { useUserStore } from "@/app/store/userState";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Hometabs = () => {
  const [formattedDate, setFormattedDate] = useState("");
  const nombre = useUserStore((state) => state.nombre);
  const loadNombre = useUserStore((state) => state.loadNombre);

  useEffect(() => {
    const checkWelcomeShown = async () => {
      const welcomeShown = await AsyncStorage.getItem('welcomeShown');
      if (!welcomeShown) {
        await AsyncStorage.setItem('welcomeShown', 'true');
        // Show welcome page logic here
      }
    };

    checkWelcomeShown();
    loadNombre();

    const date = new Date();
    const day = date.getDate();
    const monthNames = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    setFormattedDate(`${day} de ${month} del ${year}`);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyle.container2}>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, marginVertical: 10 }}>
          {formattedDate}
        </Text>
        <ImageBackground
          source={require("@/assets/images/dialogo.png")}
          style={{
            width: 254,
            height: 120,
            marginBottom: 0,
            alignItems: "center",
            paddingTop: 33,
          }}
        >
          <Text style={{ color: "black", fontSize: 16 }}>
            Bienvenido {nombre}
          </Text>
        </ImageBackground>
        <Image
          source={require("@/assets/images/cathome2.png")}
          style={{ width: 284, height: 150, marginBottom: 0 }}
        />
        <View style={globalStyle.homecat}>
          <ScrollView >
            <FlatList
            
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Hometabs;
