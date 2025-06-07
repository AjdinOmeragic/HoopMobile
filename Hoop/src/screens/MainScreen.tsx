import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function Main({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/owl.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("QuickGame")}
        >
          <Text style={styles.buttonText}>Timed</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("FlagsGame")}
        >
          <Text style={styles.buttonText}>Flags</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HistoryGame")}
        >
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
