import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons

const TabsLyout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#f2f2f2",
        tabBarInactiveTintColor: "#c99d79",
        tabBarStyle: {
          backgroundColor: "#6a3b4b",
          height: 65, // Increased height of the tab bar
          paddingBottom: 10, // Add some padding at the bottom
          paddingTop: 5, // Add some padding at the top
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <Ionicons size={26} name="book" color={color} />
          ), // Use Ionicons
        }}
      />
      <Tabs.Screen
        name="estado/index"
        options={{
          title: "Nuevo",
          tabBarIcon: ({ color }) => (
            <Ionicons size={29} name="add-circle-outline" color={color} />
          ), // Use Ionicons
        }}
      />

    
      
    </Tabs>
  );
};

export default TabsLyout;
