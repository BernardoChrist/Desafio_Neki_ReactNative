import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Cor de fundo (opcional)
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 20,
  },
});
