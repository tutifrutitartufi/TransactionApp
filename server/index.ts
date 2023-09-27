import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { getTransactions } from "./services";

dotenv.config();
const server = express();
server.use(cors());
const port = process.env.PORT;

server.get("/transactions", async (req: Request, res: Response) => {
  try {
    const address: string =
      req?.body?.query?.address || process.env.DEFAULT_WALLET_ADRESS;
    const startingBlock: string =
      req?.body?.query?.startingBlock || process.env.DEFAULT_START_BLOCK;
    const transactions = await getTransactions(address, startingBlock);
    res.send(transactions);
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while fetching transactions." });
  }
});

server.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`);
});
