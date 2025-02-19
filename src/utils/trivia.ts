import axios from 'axios';
import type { TriviaQuestion } from '~/types/trivia';

const IPFS_GATEWAY = process.env.NEXT_PUBLIC_IPFS_GATEWAY || 'https://premium.w3ipfs.storage/ipfs';
const QUESTIONS_CID = 'bafkreihlkxbsim7iagve2cufph62v2tpv6pnu4betwqmssgzxjbqkg5oku';

export async function fetchQuestion(id: string): Promise<TriviaQuestion> {
  try {
    const response = await axios.get(`${IPFS_GATEWAY}/${QUESTIONS_CID}`);
    const data = response.data;
    
    // Find question by ID
    const question = data.questions.find((q: TriviaQuestion) => q.id === id);
    if (!question) {
      throw new Error(`Question with ID ${id} not found`);
    }
    
    return question;
  } catch (error) {
    console.error('Error fetching question:', error);
    throw error;
  }
}

export function getNextQuestionId(currentId: string, totalQuestions: number): string {
  // For now, just use the nextQuestionId from the response
  return 'q2'; // This will be updated when we have more questions
} 