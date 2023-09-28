import fetch from "node-fetch";

export const getTransactions = async (
  address: string,
  startingBlock: string
) => {
  try {
    const url = `https://api.etherscan.io/api?module=account&address=${address}&startblock=${startingBlock}&action=txlist&apikey=${process.env.API_KEY}&sort=asc`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
