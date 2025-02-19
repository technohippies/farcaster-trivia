export interface TriviaQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  imageUrl: string;
  successImageUrl: string;
  failureImageUrl: string;
}

export interface TriviaState {
  questionId: string;
  showAnswer: boolean;
  selectedAnswer?: number;
  isCorrect?: boolean;
} 