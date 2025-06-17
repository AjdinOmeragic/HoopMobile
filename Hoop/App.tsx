import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "./src/screens/StartScreen";
import Login from "./src/screens/LoginScreen";
import Register from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import QuizScreen from "./src/screens/QuizzScreen";
import AboutUs from "./src/screens/AboutUsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="About Us" component={AboutUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
