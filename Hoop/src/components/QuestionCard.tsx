import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  question: string;
  answers: string[];
  callback: (answer: string) => void;
};

const QuestionCard: React.FC<Props> = ({ question, answers, callback }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.answersContainer}>
        {answers.map((answer, index) => (
          <TouchableOpacity
            key={index}
            style={styles.answerButton}
            onPress={() => callback(answer)}
          >
            <Text style={styles.answerText}>{answer}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  question: {
    fontSize: 20,
    fontWeight: "700",
    color: "#6C63FF",
    textAlign: "center",
    marginBottom: 20,
  },
  answersContainer: {
    width: "100%",
    gap: 12,
  },
  answerButton: {
    backgroundColor: "#6C63FF",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  answerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default QuestionCard;
