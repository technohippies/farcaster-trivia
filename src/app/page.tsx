import React from 'react';
import { fetchQuestion } from '~/utils/trivia';

export default async function HomePage() {
  const question = await fetchQuestion('q1');
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Learn Spanish with Trivia
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-xl text-gray-500">
              Test your Spanish knowledge with our interactive trivia game on Farcaster!
            </p>
          </div>
        </div>
      </div>

      {/* Frame Preview */}
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
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

        {/* How to Play */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Play</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <ol className="list-decimal list-inside space-y-4 text-gray-600">
                <li>Open Warpcast on your device</li>
                <li>Create a new cast</li>
                <li>Paste this URL: <code className="bg-gray-100 px-2 py-1 rounded">{process.env.NEXT_PUBLIC_HOST}</code></li>
                <li>The trivia frame will appear in your cast</li>
                <li>Answer questions and learn Spanish!</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multiple Topics</h3>
              <p className="text-gray-600">Learn greetings, numbers, colors, and more through interactive questions.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Feedback</h3>
              <p className="text-gray-600">Get immediate feedback on your answers with explanations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 