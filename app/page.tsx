import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

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
  post_url: `https://frames-js-sable.vercel.app/api/frame/`,
});

export const metadata: Metadata = {
  title: 'SkillBuddy',
  openGraph: {
    title: 'SkillBuddy',
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
