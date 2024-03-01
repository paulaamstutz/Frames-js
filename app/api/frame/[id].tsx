// pages/api/frame/[id].tsx

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // Your logic to generate HTML content based on the 'id'

  res.status(200).json({ message: `This is frame ${id}` });
}
