import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../types/user";

export default function UserSettings({ navigation }: any) {
  const [user, setUser] = useState<User | null>(null);

  /* Loads the Users data from LS and sets it Up */
  const loadUser = async () => {
    try {
      const data = await AsyncStorage.getItem("userData");
      if (data) {
        const parsedUser: User = JSON.parse(data);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error("Failed to load user data", error);
    }
  };

  /* Deletes the stored data and goes back to start */
  const deleteUser = async () => {
    await AsyncStorage.removeItem("userData");
    navigation.replace("Start");
  };

  useEffect(() => {
    loadUser();
  }, []);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Loading user data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Profile</Text>

      <View style={styles.profileCard}>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>{user.email}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Start")}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteContainer} onPress={deleteUser}>
        <Text style={styles.deleteText}>Delete Account</Text>
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
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#6C63FF",
    marginBottom: 30,
  },
  profileCard: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  username: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
    marginBottom: 16,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6C63FF",
    marginTop: 12,
  },
  info: {
    fontSize: 16,
    color: "#333",
    marginTop: 4,
  },
  button: {
    backgroundColor: "#6C63FF",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginTop: 30,
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
  editButton: {
    backgroundColor: "#4CAF50",
    marginBottom: 10,
  },
  deleteContainer: {
    marginTop: 20,
  },
  deleteText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF4D4D",
    textDecorationLine: "underline",
  },
});
