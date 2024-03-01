import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams;
  const id: any = searchParams.get('id');
  const idAsNumber = parseInt(id);

  const nextId = idAsNumber + 1;

  switch (idAsNumber) {
    case 1:
      // Frame 1 with three buttons
      return new NextResponse(`<!DOCTYPE html><html><head>
        <title>This is frame 1</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://frame-warpcast.s3.eu-central-1.amazonaws.com/question_1.png" />
        <meta property="fc:frame:button:1" content="Option 1" />
        <meta property="fc:frame:button:1:action" content="https://frames-js-sable.vercel.app/api/frame?id=2" />
        <meta property="fc:frame:button:2" content="Option 2" />
        <meta property="fc:frame:button:2:action" content="https://frames-js-sable.vercel.app/api/frame?id=2" />
        <meta property="fc:frame:button:3" content="Option 3" />
        <meta property="fc:frame:button:3:action" content="https://frames-js-sable.vercel.app/api/frame?id=3" />
        <meta property="fc:frame:post_url" content="https://frames-js-sable.vercel.app" />
      </head></html>`);

    case 2:
      // Frame 2 with a Subscribe button
      return new NextResponse(`<!DOCTYPE html><html><head>
        <title>This is frame 2</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://frame-warpcast.s3.eu-central-1.amazonaws.com/skillbuddy_canva.png" />
        <meta property="fc:frame:button:1" content="Subscribe" />
        <meta property="fc:frame:button:1:action" content="https://warpcast.com/skillbuddy" />
        <meta property="fc:frame:post_url" content="https://frames-js-sable.vercel.app" />
      </head></html>`);


    case 4:
      // Frame 3 with a Collect Reward button
      return new NextResponse(`<!DOCTYPE html><html><head>
        <title>This is frame 4</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://frame-warpcast.s3.eu-central-1.amazonaws.com/skillbuddy_canva.png" />
        <meta property="fc:frame:button:1" content="Collect Your Reward" />
        <meta property="fc:frame:button:1:action" content="https://warpcast.com/skillbuddy" />
        <meta property="fc:frame:post_url" content="https://frames-js-sable.vercel.app" />
      </head></html>`);

    default:
      // Default frame with a Next button
      return new NextResponse(`<!DOCTYPE html><html><head>
        <title>This is frame ${id}</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://frame-warpcast.s3.eu-central-1.amazonaws.com/skillbuddy_canva.png" />
        <meta property="fc:frame:button:1" content="Subscribe" />
        <meta property="fc:frame:button:1:action" content="https://warpcast.com/skillbuddy" />
        <meta property="fc:frame:post_url" content="https://warpcast.com/skillbuddy" />
      </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
