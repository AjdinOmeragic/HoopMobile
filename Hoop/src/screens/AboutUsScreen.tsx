import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function AboutUs() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo Container */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/owl.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Title Container */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>About Hoop</Text>
      </View>

      {/* Content Container */}
      <View style={styles.contentBox}>
        <Text style={styles.text}>
          Hi! We are Hoop a quiz app that gets questions from the Open Trivia
          Database. You can even add your own trivia questions!
        </Text>

        <Text style={styles.text}>
          If the API doesn't work, you'll get hand picked random Math questions.
          Don't worry, we keep the data lightweight.
        </Text>
      </View>

      {/* Features Container */}
      <View style={[styles.contentBox, styles.featureBox]}>
        <Text style={styles.text}>We plan to expand with:</Text>

        <View style={styles.featureList}>
          <Text style={styles.feature}>• More Quizzes</Text>
          <Text style={styles.feature}>• More Options</Text>
          <Text style={styles.feature}>• Timed Quizzes</Text>
          <Text style={styles.feature}>• Leaderboards</Text>
          <Text style={styles.feature}>• Profile Customization</Text>
        </View>

        <Text style={styles.text}>Coming soon with much more!</Text>
      </View>

      {/* Contact Container */}
      <View style={styles.contentBox}>
        <Text style={styles.text}>Have ideas for features? Email us at:</Text>
        <Text style={styles.email}>HoopQuiz@gmail.com</Text>
      </View>

      {/* Thank You Container */}
      <View style={styles.thanksContainer}>
        <Text style={styles.thanks}>Thank you!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#D0ECFF",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 25,
  },
  logoContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 100,
  },
  image: {
    width: 140,
    height: 140,
  },
  titleContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#6C63FF",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#6C63FF",
    textAlign: "center",
  },
  contentBox: {
    width: "100%",
    marginBottom: 20,
    padding: 18,
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 12,
  },
  featureBox: {
    borderLeftWidth: 4,
    borderLeftColor: "#6C63FF",
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
    lineHeight: 22,
  },
  featureList: {
    marginVertical: 10,
    marginLeft: 10,
  },
  feature: {
    fontSize: 16,
    color: "#6C63FF",
    marginBottom: 8,
    fontWeight: "500",
  },
  email: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#6C63FF",
    textAlign: "center",
    marginTop: 5,
    textDecorationLine: "underline",
  },
  thanksContainer: {
    marginTop: 10,
    padding: 15,
  },
  thanks: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6C63FF",
    textAlign: "center",
  },
});
