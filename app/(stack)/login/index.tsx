import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import globalStyle from "@/app/style/globalstyle";
import { router } from "expo-router";
import { useUserStore } from "@/app/store/userState";

const LoginStack = () => {
  const [inputNombre, setInputNombre] = React.useState("");
  const setNombre = useUserStore((state) => state.setNombre);

  const handleLogin = () => {
    if (inputNombre.trim()) {
      setNombre(inputNombre.trim());
      router.push('/home');
    } else {
      router.push('/login');
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[globalStyle.container, { justifyContent: "space-between" }]}
      >
        <View style={[globalStyle.container, { alignItems:'center',justifyContent:'center', padding: 0 }]}>
        <Text style={[globalStyle.h1, globalStyle.m20,{fontSize:40}]}>
          Animotion
          </Text>
          <Image
            source={require("@/assets/images/relax.png")}
            style={{ width: 150, height: 150, marginBottom: 30 }}
          />
          <Text style={[globalStyle.h1, globalStyle.m20]}>
          ¿Cómo Estás Realmente Hoy?
          </Text>
          <Text style={[globalStyle.textwhite, globalStyle.m20]}>
            Tu bienestar empieza con un solo clic. Registra hoy cómo te sientes
            y cultiva una mente más presente
          </Text>
        </View>

        <TextInput 
          placeholder="Ingrese su nombre" 
          style={[globalStyle.input, globalStyle.m20]} 
          value={inputNombre}
          onChangeText={setInputNombre}
          placeholderTextColor="#999"
        />
        <TouchableOpacity
          style={globalStyle.buttonWellcome}
          onPress={handleLogin}
        >
          <Text style={globalStyle.buttonTextw}>Comencemos</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default LoginStack;
