# Farcaster Trivia Frame

A Farcaster Frame that lets users play trivia games directly in their Warpcast feed. Built with Next.js 15 and Frames v2.

## Features

- Interactive trivia questions with multiple choice answers
- Success/failure feedback with explanations
- IPFS-hosted question database
- Responsive design that works in Warpcast

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Farcaster Frames v2
- IPFS for content storage

## Development

1. Clone the repository:
```bash
git clone https://github.com/technohippies/farcaster-trivia.git
cd farcaster-trivia
```

2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file:
```
NEXT_PUBLIC_HOST=your-domain-or-ngrok-url
NEXT_PUBLIC_IPFS_GATEWAY=https://premium.w3ipfs.storage/ipfs
```

4. Run the development server:
```bash
bun dev
```

5. For local testing with Warpcast, use ngrok:
```bash
ngrok http 3000
```

## Adding Questions

Questions are stored on IPFS in the following format:
```json
{
  "questions": [
    {
      "id": "q1",
      "question": "Your question here?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0,
      "explanation": "Explanation of the correct answer",
      "imageUrl": "IPFS URL to question image",
      "successImageUrl": "IPFS URL to success image",
      "failureImageUrl": "IPFS URL to failure image"
    }
  ]
}
```

## License

This project is licensed under the GNU Affero General Public License v3.0 - see the [LICENSE](LICENSE) file for details. 