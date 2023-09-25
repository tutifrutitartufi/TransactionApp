import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import { getTransactions } from "./services";

dotenv.config();

const server = express();
const port = process.env.PORT;

server.get("/transactions", async (req: Request, res: Response) => {
  try {
    console.log(req.body.query.address);
    const address: string = req.body.query || process.env.DEFAULT_WALLET_ADRESS;
    const startingBlock: string =
      req.body.query || process.env.DEFAULT_START_BLOCK;
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
