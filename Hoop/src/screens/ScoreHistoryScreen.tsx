import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function UserScoreHistory() {
  const history = [
    { time: "19:08", date: "01/04/2025", score: "6/10" },
    { time: "13:45", date: "28/03/2025", score: "8/10" },
    { time: "20:15", date: "21/03/2025", score: "9/10" },
    { time: "11:22", date: "15/03/2025", score: "4/10" },
    { time: "19:08", date: "01/04/2025", score: "6/10" },
    { time: "13:45", date: "28/03/2025", score: "8/10" },
    { time: "20:15", date: "21/03/2025", score: "9/10" },
    { time: "11:22", date: "15/03/2025", score: "4/10" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>History</Text>

      <ScrollView style={styles.scrollView}>
        {history.map((entry, index) => (
          <View key={index} style={styles.entryCard}>
            <Text style={styles.entryText}>Time: {entry.time}</Text>
            <Text style={styles.entryText}>Date: {entry.date}</Text>
            <Text style={styles.entryText}>Score: {entry.score}</Text>
          </View>
        ))}
      </ScrollView>
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
    fontSize: 30,
    fontWeight: "900",
    color: "#6C63FF",
    marginBottom: 30,
  },
  scrollView: {
    width: "100%",
  },
  entryCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
  },
  entryText: {
    fontSize: 16,
    color: "#6C63FF",
    marginBottom: 4,
    fontWeight: "800",
  },
});
