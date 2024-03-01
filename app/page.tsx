import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "FIrst Choice",
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
  return (
    <>
      <h1>SkillBuddy</h1>
    </>
  );
}
