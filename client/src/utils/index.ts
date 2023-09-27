import { Transaction } from "../interfaces";

export const getExactAmountOnDate = (transactions: Transaction[]) => {
  let amount: string = "0";
  transactions.forEach((transaction: Transaction) => {
    const date = new Date(transaction?.timeStamp);
    if (date === new Date()) {
      amount = transaction?.value;
    }
  });
  return amount;
};
