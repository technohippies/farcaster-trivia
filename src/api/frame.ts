import express from 'express';
import { type FrameEmbed } from '@farcaster/frame-sdk';

const app = express();

app.get('/api/frame', async (req, res) => {
  const question = await fetchCurrentQuestion();
  
  const frameData: FrameEmbed = {
    version: 'next',
    imageUrl: question.imageUrl,
    // ... rest of the frame data
  };

  res.setHeader('Content-Type', 'text/html');
  res.send(`<!DOCTYPE html>...`);
}); 