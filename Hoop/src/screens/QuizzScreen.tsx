import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { fetchQuizQuestions } from "../utils/api";
import { Difficulty, QuestionState } from "../types/quiz";
import QuestionCard from "../components/QuestionCard";

const TOTAL_QUESTIONS = 8;

const QuizScreen = ({ route, navigation }: any) => {
  /*--- MAIN COMPONENTS --- (Basically constants [checks users choices D,C; CC,CD])*/
  const { difficulty, category } = route.params;
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const loadQuestions = async () => {
      const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        difficulty,
        category
      );
      setQuestions(newQuestions);
      setLoading(false);
    };

    loadQuestions();
  }, [difficulty, category]); /* Cheking */

  const checkAnswer = (userAnswer: string) => {
    if (questions[number].correct_answer === userAnswer) {
      const updateTheDamnScore = () => {
        const currentScore = score;
        const newScore = currentScore + 1;
        setScore(newScore);
      };
      updateTheDamnScore();
    }

    if (number === TOTAL_QUESTIONS - 1) {
      setGameOver(true);
    } else {
      setNumber((prev) => prev + 1);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  if (gameOver) {
    return (
      <View style={styles.container}>
        <Text style={styles.finalScore}>
          Your Score: {score}/{TOTAL_QUESTIONS}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: {score}</Text>
      <Text style={styles.questionCount}>
        Question: {number + 1}/{TOTAL_QUESTIONS}
      </Text>
      {questions.length > 0 && (
        <QuestionCard
          question={questions[number].question}
          answers={questions[number].answers}
          callback={checkAnswer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D0ECFF",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 70,
    paddingHorizontal: 24,
  },
  score: {
    fontSize: 18,
    fontWeight: "600",
    color: "#6C63FF",
    marginBottom: 12,
    alignSelf: "flex-start",
  },
  questionCount: {
    fontSize: 18,
    fontWeight: "600",
    color: "#6C63FF",
    marginBottom: 12,
    alignSelf: "flex-start",
  },
  finalScore: {
    fontSize: 24,
    fontWeight: "700",
    color: "#6C63FF",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#6C63FF",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 20,
    width: "100%",
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
});

export default QuizScreen;