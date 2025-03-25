import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import globalStyle from "@/app/style/globalstyle";
import { router, useLocalSearchParams } from "expo-router";

const Favoritetabs = () => {
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyle.container2}>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Favoritetabs;
