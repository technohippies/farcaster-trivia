import './globals.css';
import { fetchQuestion } from '~/utils/trivia';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const question = await fetchQuestion('q1');

  return (
    <html lang="en">
      <head>
        <title>Spanish Trivia Game</title>
        <meta property="og:title" content="Spanish Trivia Game" />
        <meta property="og:image" content={question.imageUrl} />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={question.imageUrl} />
        <meta property="fc:frame:button:1" content={question.options[0]} />
        <meta property="fc:frame:button:2" content={question.options[1]} />
        <meta property="fc:frame:button:3" content={question.options[2]} />
        <meta property="fc:frame:button:4" content={question.options[3]} />
        <meta property="fc:frame:post_url" content={`${process.env.NEXT_PUBLIC_HOST}/api/answer?id=q1`} />
      </head>
      <body>{children}</body>
    </html>
  );
}
