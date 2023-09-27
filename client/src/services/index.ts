export const getTransactions = async (
  address: string,
  startingBlock: string
) => {
  try {
    const url = `http://localhost:3001/transactions?address=${address}&startingBlock=${startingBlock}`;
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
