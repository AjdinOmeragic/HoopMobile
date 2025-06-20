import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Footer {
  navigation: any;
}

export default function FooterNav({ navigation }: Footer) {
  const [isGuest, setIsGuest] = useState(true);

  useEffect(() => {
    /*--- CHECKER FOR GUEST STATUS --- */
    const checkGuestStatus = async () => {
      try {
        const status = await AsyncStorage.getItem("isGuest");
        setIsGuest(status === "true");
      } catch (error) {
        console.error("Failed to check guest status", error);
      }
    };

    checkGuestStatus();
    const unsubscribe = navigation.addListener("focus", checkGuestStatus);
    return unsubscribe;
  }, [navigation]);

  /*--- ALERTER FOR GUEST STATUS --- */
  const handleProtectedPress = (screenName: string) => {
    if (isGuest) {
      Alert.alert(
        "Guest Mode",
        `Please register or login to access ${screenName}`,
        [
          {
            text: "Login",
            onPress: () => navigation.navigate("Login"),
          },
          {
            text: "Continue as Guest",
            style: "cancel",
          },
        ]
      );
    } else {
      navigation.navigate(screenName);
    }
  };

  return (
    <View style={styles.footer}>
      {/*--- ABOUT US ALLWAYS AVALIBLE FOR ALL USERS ---*/}
      <TouchableOpacity onPress={() => navigation.navigate("About Us")}>
        <Image source={require("../../assets/about.png")} style={styles.icon} />
      </TouchableOpacity>

      {/*--- SETTINGS ONLY ACCESABLE TO LOGED IN OR REGISTERED USERS ---*/}
      <TouchableOpacity onPress={() => handleProtectedPress("User Settings")}>
        <Image
          source={require("../../assets/settings.png")}
          style={[styles.icon, isGuest && styles.disabledIcon]}
        />
      </TouchableOpacity>

      {/*--- HISTORY ONLY ACCESABLE TO LOGED IN OR REGISTERED USERS ---*/}
      <TouchableOpacity onPress={() => handleProtectedPress("History")}>
        <Image
          source={require("../../assets/ranking.png")}
          style={[styles.icon, isGuest && styles.disabledIcon]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 140,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 70,
    paddingTop: 10,
  },
  icon: {
    width: 40,
    height: 40,
    tintColor: "#6C63FF",
  },
  disabledIcon: {
    tintColor: "#aaa",
    opacity: 0.6,
  },
});
