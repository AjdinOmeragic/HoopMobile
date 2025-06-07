import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Difficulty, QuestionState } from "../data/quetsions";

const TOTAL_QUESTIONS = 10;
