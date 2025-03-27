import {
  Image,
  View,
  Text,
  ImageBackground,
  FlatList,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import globalStyle from "@/app/style/globalstyle";
import { useUserStore } from "@/app/store/userState";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import StateItem from "@/app/components/StateItem";

const Hometabs = () => {
  const [formattedDate, setFormattedDate] = useState("");
  const [userStates, setUserStates] = useState([]);
  const nombre = useUserStore((state) => state.nombre);
  const loadNombre = useUserStore((state) => state.loadNombre);

  // Function to load states from AsyncStorage
  const loadUserStates = async () => {
    try {
      const statesJSON = await AsyncStorage.getItem("userStates");
      if (statesJSON) {
        const states = JSON.parse(statesJSON);
        // Sort by timestamp (newest first)
        states.sort((a: any, b: any) => b.timestamp - a.timestamp);
        setUserStates(states);
      }
    } catch (error) {
      console.error("Error loading states:", error);
    }
  };

  // Load states when the screen comes into focus
  useFocusEffect(
    useCallback(() => {
      loadUserStates();
      return () => {};
    }, [])
  );

  useEffect(() => {
    const checkWelcomeShown = async () => {
      const welcomeShown = await AsyncStorage.getItem("welcomeShown");
      if (!welcomeShown) {
        await AsyncStorage.setItem("welcomeShown", "true");
        // Show welcome page logic here
      }
    };

    checkWelcomeShown();
    loadNombre();
    loadUserStates(); // Load states on initial render

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
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            marginVertical: 10,
          }}
        >
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
          style={{  height: 100, marginBottom: 0 }}
          resizeMode="contain"
        />
        <View style={[globalStyle.homecat, { flex: 1, padding: 20 }]}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
            Tus Estados
          </Text>
          {userStates.length > 0 ? (
            <FlatList
              data={userStates}
              renderItem={({ item }) => <StateItem item={item} />}
              keyExtractor={(item, index) => index.toString()}
              style={{ width: "100%" }}
            />
          ) : (
            <Text style={{ textAlign: "center", marginTop: 20, color: "#666" }}>
              No hay estados guardados aún
            </Text>
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Hometabs;
