import axios from 'axios';
import { Difficulty, Question, QuestionState, Category } from '../types/quiz';

const API_BASE_URL = 'https://opentdb.com';

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await axios.get(`${API_BASE_URL}/api_category.php`);
  return response.data.trivia_categories;
};

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty,
  category?: number
): Promise<QuestionState[]> => {
  const categoryParam = category ? `&category=${category}` : '';
  const endpoint = `${API_BASE_URL}/api.php?amount=${amount}&difficulty=${difficulty}${categoryParam}&type=multiple`;
  
  try {
    const response = await axios.get(endpoint);
    return response.data.results.map((question: Question) => ({
      ...question,
      answers: [...question.incorrect_answers, question.correct_answer].sort(
        () => Math.random() - 0.5
      ),
    }));
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};