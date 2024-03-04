import { getFrameMetadata } from '@coinbase/onchainkit';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

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
    post_url: `https://frames-js-sable.vercel.app/api/frame/${id}`,
  });

  return (
    <>
      <h1>SkillBuddy</h1>
    </>
  );
}