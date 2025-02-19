import { NextResponse } from 'next/server';
import { fetchQuestion } from '~/utils/trivia';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id') || 'q1';

  try {
    const question = await fetchQuestion(id);
    
    // HTML response with frame metadata
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Web3 Trivia</title>
          <meta property="og:title" content="Web3 Trivia" />
          <meta property="og:image" content="${question.imageUrl}" />
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${question.imageUrl}" />
          <meta property="fc:frame:button:1" content="A" />
          <meta property="fc:frame:button:2" content="B" />
          <meta property="fc:frame:button:3" content="C" />
          <meta property="fc:frame:button:4" content="D" />
          <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_HOST}/api/answer?id=${id}" />
        </head>
        <body>
          <h1>Web3 Trivia Game</h1>
          <p>View this frame on Warpcast!</p>
        </body>
      </html>`,
      {
        headers: {
          'Content-Type': 'text/html',
        },
      }
    );
  } catch (error) {
    console.error('Error generating frame:', error);
    return new NextResponse('Error generating frame', { status: 500 });
  }
} 