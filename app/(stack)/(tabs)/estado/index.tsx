import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import globalStyle from "@/app/style/globalstyle";

const Estado = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[globalStyle.container,{display:'flex',justifyContent:'center'}]}>
        <Text style={globalStyle.h1}>Como estas?</Text>
        <TouchableOpacity style={globalStyle.buttonWellcome}>
          <Text style={globalStyle.buttonTextw}>Guardar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Estado;
