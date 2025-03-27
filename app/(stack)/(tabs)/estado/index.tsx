import {
  Image,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import globalStyle from "@/app/style/globalstyle";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Estado = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [message, setMessage] = useState("");

  const handleMoodSelect = (mood: any) => {
    setSelectedMood(mood);
  };

  const saveState = async () => {
    if (!selectedMood)return;
    try {
      // Get current date
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
      const formattedDate = `${day} de ${month} del ${year}`;

      // crea el objeto para guardar
      const newState = {
        mood: selectedMood,
        message: message,
        date: formattedDate,
        timestamp: date.getTime(), // For sorting
      };

      // Get existing states or create empty array
      const existingStatesJSON = await AsyncStorage.getItem("userStates");
      const existingStates = existingStatesJSON
        ? JSON.parse(existingStatesJSON)
        : [];

      // Add new state and save
      existingStates.push(newState);
      await AsyncStorage.setItem("userStates", JSON.stringify(existingStates));

      alert("Guardado correctamente");
      setSelectedMood("");
      setMessage("");
    } catch (error) {
      console.error("Error saving state:", error);
      alert("Error al guardar el estado");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          globalStyle.container,
          { display: "flex", justifyContent: "center" },
        ]}
      >
        <Text style={[globalStyle.h1,{color:'#6a3b4b'}]}>¿COMO TE SIENTES HOY?</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            marginVertical: 80,
          }}
        >
          <TouchableOpacity
            style={[
              { padding: 10, borderRadius: 10 },
              selectedMood === "Increible"
                ? { backgroundColor: "#4CAF50" }
                : { backgroundColor: "#C99D79" },//cambie el color del boton
            ]}
            onPress={() => handleMoodSelect("Increible")}
          >
            <Image
              source={require("@/assets/images/cat1.png")}
              style={{ width: 54, height: 50, marginBottom: 0 }}
              resizeMode="contain"
            />
            <Text>Increible</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              { padding: 10, borderRadius: 5 },
              selectedMood === "Bien"
                ? { backgroundColor: "#8BC34A" }
                : { backgroundColor: "#C99D79" },
            ]}
            onPress={() => handleMoodSelect("Bien")}
          >
            <Image
              source={require("@/assets/images/cat2.png")}
              style={{ width: 54, height: 50, marginBottom: 0 }}
              resizeMode="contain"
            />
            <Text>Bien</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              { padding: 10, borderRadius: 5 },
              selectedMood === "Meh"
                ? { backgroundColor: "#FFC107" }
                : { backgroundColor: "#C99D79" },
            ]}
            onPress={() => handleMoodSelect("Meh")}
          >
            <Image
              source={require("@/assets/images/cat3.png")}
              style={{ width: 54, height: 50, marginBottom: 0 }}
              resizeMode="contain"
            />
            <Text>Meh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              { padding: 10, borderRadius: 5 },
              selectedMood === "Mal"
                ? { backgroundColor: "#FF9800" }
                : { backgroundColor: "#C99D79" },
            ]}
            onPress={() => handleMoodSelect("Mal")}
          >
            <Image
              source={require("@/assets/images/cat4.png")}
              style={{ width: 54, height: 50, marginBottom: 0 }}
              resizeMode="contain"
            />
            <Text>Mal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              { padding: 10, borderRadius: 5 },
              selectedMood === "Horrible"
                ? { backgroundColor: "#F44336" }
                : { backgroundColor: "#C99D79" },
            ]}
            onPress={() => handleMoodSelect("Horrible")}
          >
            <Image
              source={require("@/assets/images/cat5.png")}
              style={{ width: 54, height: 50, marginBottom: 0 }}
              resizeMode="contain"
            />
            <Text>Horrible</Text>
          </TouchableOpacity>
        </View>
        <Text style={[globalStyle.h2,{textAlign:'center'}]}>Describa mas detalles</Text>
        <TextInput
          style={[
            globalStyle.input,
            { height: 100,width:'90%' ,marginVertical:10},
          ]}
          placeholder="Escribe un mensaje"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <View style={{width:'100%',paddingHorizontal:10}}>
        <TouchableOpacity
          style={globalStyle.buttonWellcome}
          onPress={saveState}
        >
          <Text style={globalStyle.buttonTextw}>Guardar</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Estado;
