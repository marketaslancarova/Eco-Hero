import React, { useState, useEffect } from "react";
import { Text, View, Image, Button } from "react-native";
import {
  useFonts,
  Mulish_400Regular,
  Mulish_700Bold,
} from "@expo-google-fonts/mulish";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Mulish_700Bold,
    Mulish_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: "Mulish_700Bold", fontSize: 24 }}>
        Eco Hero
      </Text>
      <Text style={{ fontFamily: "Mulish_700Bold", fontSize: 24 }}>
        Guardians of the Green!
      </Text>
      <Image source={require("./assets/eco-hero.png")} />
      <Text style={{ fontFamily: "Mulish_400Regular", fontSize: 24 }}>
        It's time to be a hero for our planet! Help Eco Hero in the epic fight
        against Poluto and learn how to keep our world thriving.
      </Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </View>
  );
}
