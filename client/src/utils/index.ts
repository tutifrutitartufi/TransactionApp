import { Transaction } from "../interfaces";

export const getExactAmountOnDate = (transactions: Transaction[]) => {
  let amount: string = "0";
  transactions.forEach((transaction: Transaction) => {
    const date = new Date(parseInt(transaction?.timeStamp) * 1000);
    if (date === new Date()) {
      amount = transaction?.value;
    }
  });
  return amount;
};
