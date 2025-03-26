import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import globalStyle from "@/app/style/globalstyle";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Estado = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [message, setMessage] = useState("");

  const handleMoodSelect = (mood:any) => {
    setSelectedMood(mood);
  };

  const saveState = async () => {
    if (!selectedMood) {
      alert("Por favor selecciona cómo te sientes");
      return;
    }

    try {
      // Get current date
      const date = new Date();
      const day = date.getDate();
      const monthNames = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
      ];
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();
      const formattedDate = `${day} de ${month} del ${year}`;

      // Create new state object
      const newState = {
        mood: selectedMood,
        message: message,
        date: formattedDate,
        timestamp: date.getTime() // For sorting
      };

      // Get existing states or create empty array
      const existingStatesJSON = await AsyncStorage.getItem('userStates');
      const existingStates = existingStatesJSON ? JSON.parse(existingStatesJSON) : [];

      // Add new state and save
      existingStates.push(newState);
      await AsyncStorage.setItem('userStates', JSON.stringify(existingStates));

      alert("Estado guardado correctamente");
      setSelectedMood("");
      setMessage("");
    } catch (error) {
      console.error("Error saving state:", error);
      alert("Error al guardar el estado");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[globalStyle.container,{display:'flex',justifyContent:'center'}]}>
        <Text style={globalStyle.h1}>Como estas?</Text>
        <View style={{display:'flex',flexDirection:'row',gap:10,marginVertical:80}}>
          <TouchableOpacity 
            style={[{padding: 10, borderRadius: 5}, selectedMood === "Increible" ? {backgroundColor: '#4CAF50'} : {backgroundColor: '#e0e0e0'}]}
            onPress={() => handleMoodSelect("Increible")}>
            <Text>Increible</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[{padding: 10, borderRadius: 5}, selectedMood === "Bien" ? {backgroundColor: '#8BC34A'} : {backgroundColor: '#e0e0e0'}]}
            onPress={() => handleMoodSelect("Bien")}>
            <Text>Bien</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[{padding: 10, borderRadius: 5}, selectedMood === "Meh" ? {backgroundColor: '#FFC107'} : {backgroundColor: '#e0e0e0'}]}
            onPress={() => handleMoodSelect("Meh")}>
            <Text>Meh</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[{padding: 10, borderRadius: 5}, selectedMood === "Mal" ? {backgroundColor: '#FF9800'} : {backgroundColor: '#e0e0e0'}]}
            onPress={() => handleMoodSelect("Mal")}>
            <Text>Mal</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[{padding: 10, borderRadius: 5}, selectedMood === "Horrible" ? {backgroundColor: '#F44336'} : {backgroundColor: '#e0e0e0'}]}
            onPress={() => handleMoodSelect("Horrible")}>
            <Text>Horrible</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={[globalStyle.input,{marginVertical:10,width:300,height:100}]}
          placeholder="Escribe un mensaje"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity 
          style={globalStyle.buttonWellcome}
          onPress={saveState}>
          <Text style={globalStyle.buttonTextw}>Guardar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Estado;
