import { getFrameMetadata } from '@coinbase/onchainkit';
import { GetServerSideProps } from 'next';

interface PageProps {
  id: string;
}

export default function Page({ id }: PageProps) {
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

  // rest of your component...
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params ? context.params.id : null;

  return {
    props: { id }, // will be passed to the page component as props
  };
}