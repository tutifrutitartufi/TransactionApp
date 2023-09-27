export interface Transaction {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  value: string;
  gas: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  transactionIndex: string;
  from: string;
  to: string;
  confirmations: string;
  txreceipt_status: string;
}
