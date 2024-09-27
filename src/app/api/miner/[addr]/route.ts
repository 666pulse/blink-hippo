import {
  ACTIONS_CORS_HEADERS,
  ActionGetResponse,
  ActionPostRequest,
  ActionPostResponse,
  createActionHeaders,
  createPostResponse,
} from "@solana/actions";

import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  clusterApiUrl,
} from "@solana/web3.js";

const amount = 1;
// create the standard headers for this route (including CORS)
const headers = createActionHeaders({ chainId: "mainnet-beta", actionVersion: "1" });

export const GET = (req: Request, { params }) => {

  const addr = params.addr;

  try {
    const requestUrl = new URL(req.url);
    const baseHref = new URL(`/api/miner/${addr}`,
      requestUrl.origin
    ).toString();


    console.log("baseHref: ", baseHref);

    const payload: ActionGetResponse = {
      icon: new URL("/hippo.jpg", new URL(req.url).origin).toString(),
      title: "Blink Hippo",
      disabled: false,
      description: `Bring Meme Users into the Blinks: ${addr}`,
      label: "Blink Hippo",
      links: {
        actions: [
          {
            // type: "external-link",
            label: "Collect",
            href: `${baseHref}/collect`,
          },
          {
            // type: "external-link",
            label: "Upgrade",
            href: `${baseHref}/upgrade`,
          },
        ],
      },
    };
    return Response.json(payload, {
      headers,
    });
  } catch (err) {
    console.log(err);
    let message = "An unknown error occurred";
    if (typeof err == "string") message = err;
    return new Response(message, {
      status: 400,
      headers: ACTIONS_CORS_HEADERS,
    });
  }
};

export const OPTIONS = GET;

export const POST = async (req: Request, { params }) => {

  const _toAddr = params.addr;
  const toAddr = new PublicKey(_toAddr);

  try {
    const body: ActionPostRequest = await req.json();

    let account: PublicKey;
    try {
      account = new PublicKey(body.account);
    } catch (err) {
      return new Response("Invalid 'account' provided", {
        status: 400,
        headers: ACTIONS_CORS_HEADERS,
      });
    }

    const transaction = new Transaction();

    transaction.add(
      SystemProgram.transfer({
        fromPubkey: account,
        toPubkey: toAddr,
        lamports: amount * LAMPORTS_PER_SOL,
      }),
    );

    transaction.feePayer = account;

    const connection = new Connection(
      clusterApiUrl("mainnet-beta")
    );

    // 添加重试逻辑
    const getRecentBlockhash = async (retries = 3) => {
      for (let i = 0; i < retries; i++) {
        try {
          const { blockhash } = await connection.getLatestBlockhash();
          return blockhash;
        } catch (error) {
          console.error(`获取最新区块哈希失败，尝试次数：${i + 1}`, error);
          if (i === retries - 1) throw error;
          await new Promise(resolve => setTimeout(resolve, 1000)); // 等待 1 秒后重试
        }
      }
    };

    transaction.recentBlockhash = await getRecentBlockhash();
    const payload: ActionPostResponse = await createPostResponse({
      fields: {
        transaction,
      },
    });
    return Response.json(payload, {
      headers,
    });
  } catch (err) {
    console.log(err);
    return Response.json("An unknow error occurred", { status: 400 });
  }
};