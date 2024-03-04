import { getFrameMetadata } from '@coinbase/onchainkit';

export default function Page({ id }: { id: any }) {
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

}