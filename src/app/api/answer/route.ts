import { NextResponse } from 'next/server';
import { fetchQuestion, getNextQuestionId } from '~/utils/trivia';

export async function POST(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id') || 'q1';
    
    const body = await req.json();
    const buttonIndex = parseInt(body.untrustedData.buttonIndex) - 1; // Convert to 0-based index
    
    const question = await fetchQuestion(id);
    const isCorrect = buttonIndex === question.correctAnswer;
    
    // Get next question ID
    const nextId = getNextQuestionId(id, 10); // Assuming 10 total questions
    
    // Return frame response with result
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Web3 Trivia Result</title>
          <meta property="og:title" content="Web3 Trivia Result" />
          <meta property="og:image" content="${isCorrect ? question.successImageUrl : question.failureImageUrl}" />
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${isCorrect ? question.successImageUrl : question.failureImageUrl}" />
          <meta property="fc:frame:button:1" content="Next Question" />
          <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_HOST}/api/frame?id=${nextId}" />
        </head>
        <body>
          <h1>${isCorrect ? 'Correct!' : 'Wrong Answer!'}</h1>
          <p>${question.explanation}</p>
        </body>
      </html>`,
      {
        headers: {
          'Content-Type': 'text/html',
        },
      }
    );
  } catch (error) {
    console.error('Error handling answer:', error);
    return new NextResponse('Error handling answer', { status: 500 });
  }
} 