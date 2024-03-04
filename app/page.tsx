import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { useEffect } from 'react';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "First Choice",
    },
    {
      label: "Second Choice",
    },
    {
      label: "Third Choice",
    }
  ],
  image: "https://frame-warpcast.s3.eu-central-1.amazonaws.com/skillbuddy_canva.png",
  post_url: `https://frames-js-sable.vercel.app/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Cosmic Cowboys',
  description: 'A frame telling the story of Cosmic Cowboys',
  openGraph: {
    title: 'Cosmic Cowboys',
    description: 'A frame telling the story of Cosmic Cowboys',
    images: ["https://frame-warpcast.s3.eu-central-1.amazonaws.com/skillbuddy_canva.png"],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  useEffect(() => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button, index) => {
      const actionUrlElement = document.querySelector(`meta[name="fc:frame:button:${index + 1}:action"]`);
      const actionUrl = actionUrlElement?.getAttribute('content');
      if (actionUrl) {
        window.location.href = actionUrl;
      }
    });
  }, []);

  return (
    <>
      <h1>SkillBuddy</h1>
      <button>First Choice</button>
      <button>Second Choice</button>
      <button>Third Choice</button>
    </>
  );
}
