import { ACTIONS_CORS_HEADERS, ActionsJson } from "@solana/actions";

export const runtime = 'edge';

export const GET = async () => {
  const payload: ActionsJson = {
    rules: [
      // map all root level routes to an action
      {
        pathPattern: "/*",
        apiPath: "/api/miner/*",
      },
      // idempotent rule as the fallback
      {
        pathPattern: "/api/miner/**",
        apiPath: "/api/miner/**",
      },
    ],
  };

  return Response.json(payload, {
    headers: ACTIONS_CORS_HEADERS,
  });
};

// DO NOT FORGET TO INCLUDE THE `OPTIONS` HTTP METHOD
// THIS WILL ENSURE CORS WORKS FOR BLINKS
export const OPTIONS = GET;
