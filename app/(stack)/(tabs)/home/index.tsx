import {
  Image,
  View,
  Text,
  ImageBackground,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import globalStyle from "@/app/style/globalstyle";
import { useUserStore } from "@/app/store/userState";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";

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

  // Render each state item
  const renderStateItem = ({ item }: any) => {
    // Define colors for different moods
    const moodColors = {
      Increible: "#4CAF50",
      Bien: "#8BC34A",
      Meh: "#FFC107",
      Mal: "#FF9800",
      Horrible: "#F44336",
    };

    // Format the time from timestamp
    const formatTime = (timestamp: number) => {
      const date = new Date(timestamp);
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'

      const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

      return `${hours}:${formattedMinutes} ${ampm}`;
    };

    const timeCreated = item.timestamp ? formatTime(item.timestamp) : "";

    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 25,
          paddingVertical: 10,
          marginVertical: 8,
          backgroundColor: "#f8f8f8",
          borderRadius: 30,
          borderLeftWidth: 5,
          borderLeftColor:
            moodColors[item.mood as keyof typeof moodColors] || "#6a3b4b",
        }}
      >
        <View>
          <Text style={{ fontSize: 12, color: "#666" }}>{item.date} </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 5 }}>
              {item.mood}
            </Text>
            <Text style={{ fontSize: 12, color: "#666" }}>{timeCreated}</Text>
          </View>
        </View>
        <Text style={{ marginBottom: 10, maxWidth: 150 }}>{item.message}</Text>
      </View>
    );
  };

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
              renderItem={renderStateItem}
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
