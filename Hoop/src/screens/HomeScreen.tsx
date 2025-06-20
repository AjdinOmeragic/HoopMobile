import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Difficulty } from "../types/quiz";
import { fetchCategories } from "../utils/api";
import Footer from "../components/Footer";

const HomeScreen = ({ navigation }: any) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  /* --- DATA FETCHING --- */
  useEffect(() => {
    const loadCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    };
    loadCategories();
  }, []);

  /* --- QUIZ START HANDLER --- (Jumps to Quiz after the user has selected the appropriate choices)*/
  const startQuiz = async (difficulty: Difficulty) => {
    setLoading(true);
    navigation.navigate("Quiz", { difficulty, category: selectedCategory });
    setLoading(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You ready?</Text>

      {/*--- CATEGORIE ---*/}
      <Text style={styles.label}>Select Category</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedCategory}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        >
          <Picker.Item label="Any Category" value={null} />
          {categories.map((category) => (
            <Picker.Item
              key={category.id}
              label={category.name}
              value={category.id}
            />
          ))}
        </Picker>
      </View>

      {/*--- DIFICULTY SELECTION ---*/}
      <Text style={styles.label}>Choose The Difficulty</Text>
      <View style={styles.buttonGroup}>
        {["Easy", "Medium", "Hard"].map((level) => (
          <TouchableOpacity
            key={level}
            style={styles.button}
            onPress={() =>
              startQuiz(
                Difficulty[level.toUpperCase() as keyof typeof Difficulty]
              )
            }
            disabled={loading}
          >
            <Text style={styles.buttonText}>{level}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/*--- LOADING INDICATOR ---*/}
      {loading && (
        <ActivityIndicator
          size="small"
          color="#6C63FF"
          style={{ marginTop: 20 }}
        />
      )}
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D0ECFF",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 30,
    paddingHorizontal: 15,
    paddingBottom: 0,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#6C63FF",
    marginBottom: 30,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    alignSelf: "flex-start",
    marginBottom: 8,
    marginLeft: 5,
  },
  pickerWrapper: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    marginBottom: 20,
    overflow: "hidden",
  },
  picker: {
    width: "100%",
    height: 50,
  },
  buttonGroup: {
    width: "100%",
    gap: 12,
    marginTop: 5,
  },
  button: {
    backgroundColor: "#6C63FF",
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default HomeScreen;
