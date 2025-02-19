'use client';

import React, { useEffect, useState } from 'react';
import { type TriviaQuestion, type TriviaState } from '~/types/trivia';
import { fetchQuestion, getNextQuestionId } from '~/utils/trivia';

export default function TriviaGame({ params }: { params: { id: string } }) {
  const [question, setQuestion] = useState<TriviaQuestion | undefined>();
  const [state, setState] = useState<TriviaState>({
    questionId: params.id.startsWith('q') ? params.id : `q${params.id}`,
    showAnswer: false
  });

  useEffect(() => {
    const init = async () => {
      const question = await fetchQuestion(state.questionId);
      setQuestion(question);
    };
    init();
  }, [state.questionId]);

  // Handle button clicks for answer selection
  const handleAnswerSelect = (index: number) => {
    if (state.showAnswer) return;
    setState((prev: TriviaState) => ({
      ...prev,
      selectedAnswer: index
    }));
  };

  // Handle answer submission
  const handleSubmit = async () => {
    if (!question || state.showAnswer) return;
    
    const isCorrect = state.selectedAnswer === question.correctAnswer;
    setState((prev: TriviaState) => ({
      ...prev,
      isCorrect,
      showAnswer: true
    }));
  };

  // Handle next question
  const handleNext = () => {
    const nextId = getNextQuestionId(state.questionId, 10); // Assuming 10 total questions
    window.location.href = `/trivia/${nextId}`;
  };

  if (!question) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4">
      <img 
        src={state.showAnswer && state.isCorrect ? 
          question.successImageUrl : 
          state.showAnswer ? question.failureImageUrl : 
          question.imageUrl
        } 
        alt="Trivia"
        className="w-full rounded-lg"
      />
      
      <h2 className="text-xl font-bold mt-4">{question.question}</h2>
      
      <div className="space-y-2 mt-4">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleAnswerSelect(i)}
            disabled={state.showAnswer}
            className={`w-full p-2 rounded ${
              state.selectedAnswer === i ? 'bg-blue-500 text-white' : 'bg-gray-200'
            } ${
              state.showAnswer && i === question.correctAnswer ? 'bg-green-500 text-white' : ''
            } disabled:opacity-50`}
          >
            {option}
          </button>
        ))}
      </div>

      {!state.showAnswer && state.selectedAnswer !== undefined && (
        <button
          onClick={handleSubmit}
          className="w-full mt-4 p-2 rounded bg-blue-600 text-white font-bold"
        >
          Submit Answer
        </button>
      )}

      {state.showAnswer && (
        <>
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p>{question.explanation}</p>
          </div>
          <button
            onClick={handleNext}
            className="w-full mt-4 p-2 rounded bg-blue-600 text-white font-bold"
          >
            Next Question
          </button>
        </>
      )}
    </div>
  );
} 