// pages/api/frame/[id].tsx

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const idAsNumber = parseInt(id as string);

  console.log(`Handling request for frame with id: ${id}`);
  if (req.method === 'POST') {
    // Handle POST request
    // You can access the request body using req.body
    console.log(req.body);
    res.status(200).json({ message: 'POST request received' });
  } else if (req.method === 'GET') {
    // Handle GET request
    if (idAsNumber === 1) {
      res.send(`<!DOCTYPE html><html><head>
      <title>This is frame 1</title>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://frame-warpcast.s3.eu-central-1.amazonaws.com/question_1.png" />
      <meta property="fc:frame:button:1" content="Option 1" />
      <meta property="fc:frame:button:1:action" content="https://frames-js-sable.vercel.app/api/frame/2" />
      <meta property="fc:frame:button:2" content="Option 2" />
      <meta property="fc:frame:button:2:action" content="https://frames-js-sable.vercel.app/api/frame/2" />
      <meta property="fc:frame:button:3" content="Option 3" />
      <meta property="fc:frame:button:3:action" content="https://frames-js-sable.vercel.app/api/frame/3" />
      <meta property="fc:frame:post_url" content="https://frames-js-sable.vercel.app" />
    </head></html>`);
    } else if (idAsNumber === 2) {
      res.send(`<!DOCTYPE html><html><head>
      <title>This is frame 2</title>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://frame-warpcast.s3.eu-central-1.amazonaws.com/skillbuddy_canva.png" />
      <meta property="fc:frame:button:1" content="Subscribe" />
      <meta property="fc:frame:button:1:action" content="https://warpcast.com/skillbuddy" />
      <meta property="fc:frame:post_url" content="https://frames-js-sable.vercel.app" />
    </head></html>`);
    } else {
      // Frame 3 with a Collect Reward button
      res.send(`<!DOCTYPE html><html><head>
      <title>This is frame 4</title>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://frame-warpcast.s3.eu-central-1.amazonaws.com/skillbuddy_canva.png" />
      <meta property="fc:frame:button:1" content="Collect Your Reward" />
      <meta property="fc:frame:button:1:action" content="https://warpcast.com/skillbuddy" />
      <meta property="fc:frame:post_url" content="https://frames-js-sable.vercel.app" />
    </head></html>`);
    }
  } else {
    // Handle other methods
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}