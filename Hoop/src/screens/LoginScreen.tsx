import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Image
            source={require("../../assets/owl.png")}
            style={styles.image}
            resizeMode="contain"
          />

          {/* --- EMAIL INPUT FIELD ---*/}
          <View style={styles.inputWrapper}>
            <MaterialIcons name="email" size={24} color="#6C63FF" />
            <TextInput
              style={styles.input}
              placeholder="example@example.com"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* --- PASSWORD INPUT FIELD ---*/}
          <View style={styles.inputWrapper}>
            <MaterialIcons name="lock" size={24} color="#6C63FF" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
              style={{ paddingHorizontal: 6 }}
            >
              <MaterialIcons
                name={passwordVisible ? "visibility" : "visibility-off"}
                size={24}
                color="#6C63FF"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D0ECFF",
    paddingHorizontal: 16,
    paddingTop: 16,
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#BDA05D",
    width: "100%",
    paddingVertical: 16,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#031F35",
  },
  image: {
    marginTop: 50,
    width: 250,
    height: 250,
    marginBottom: 50,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
    color: "#333",
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
    fontWeight: "600",
  },
});
