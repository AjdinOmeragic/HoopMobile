import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Start({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/owl.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={{ marginBottom: 40, paddingHorizontal: 10 }}>
        <Text style={styles.welcomeText}>Welcome to Hoop!</Text>
        <Text style={[styles.welcomeText, { marginTop: 8 }]}>
          Ready to test your Knowledge?
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.guestButton}
        onPress={async () => {
          await AsyncStorage.setItem("isGuest", "true"); //Sets guest value to true
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.guestText}>Continue as Guest</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D0ECFF",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 70,
    paddingHorizontal: 24,
  },
  logoContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 100,
  },
  image: {
    width: 200,
    height: 200,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#6C63FF",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#6C63FF",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginTop: 15,
    width: 220,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  guestButton: {
    marginTop: 25,
  },
  guestText: {
    color: "#6C63FF",
    fontSize: 16,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});
