'use client';

import React from 'react';
import type { TriviaQuestion } from '~/types/trivia';

export default function QuestionPreview({ question }: { question: TriviaQuestion }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Question:</h2>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <img 
            src={question.imageUrl} 
            alt="Question" 
            className="object-cover rounded-lg"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {question.question}
        </h3>
        <div className="grid grid-cols-1 gap-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => alert('To answer, please use this frame in Warpcast!')}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 