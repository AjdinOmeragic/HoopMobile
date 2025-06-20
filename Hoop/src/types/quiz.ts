/* --- THE QUESTIONS CATEGORY --- */
export type Category = {
  id: number;
  name: string;
};

/* --- THE QUESTIONS STRUCTURE --- */
export type Question = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  difficulty: string;
  category: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
};

export type QuizResults = {
  id: string;
  userId: string;
  score: number;
  total: number;
  category: string;
  difficulty: string;
  date: string;
};
