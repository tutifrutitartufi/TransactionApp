import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./App.css";
import { getTransactions } from "./services";
import { getExactAmountOnDate } from "./utils";
import { Dayjs } from "dayjs";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [addressWallet, setAddressWallet] = useState(
    "0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f"
  );
  const [startingBlock, setStartingBlock] = useState("9000000");
  const [loading, setLoading] = useState(false);
  const [dateForAmount, setDateForAmount] = useState<Dayjs | null>(null);
  const [totalAmount, setTotalAmount] = useState(0);

  const getTransactionsApi = () => {
    setLoading(true);
    getTransactions(addressWallet, startingBlock).then((res) => {
      if (res?.message === "OK") {
        setTransactions(res?.result);
        setLoading(false);
      }
    });
  };

  const handleSummingExactAmount = () => {
    const totalAmount = getExactAmountOnDate(transactions);
    setTotalAmount(parseInt(totalAmount));
  };

  const columns: GridColDef[] = [
    { field: "blockNumber", headerName: "blockNumber", width: 150 },
    { field: "timeStamp", headerName: "timeStamp", width: 130 },
    { field: "hash", headerName: "hash", width: 150 },
    { field: "value", headerName: "Amount ETH", width: 130 },
    { field: "gas", headerName: "gas", width: 130 },
    { field: "contractAddress", headerName: "contractAddress", width: 130 },
    { field: "cumulativeGasUsed", headerName: "cumulativeGasUsed", width: 150 },
    { field: "transactionIndex", headerName: "transactionIndex", width: 130 },
    { field: "from", headerName: "from", width: 130 },
    { field: "to", headerName: "to", width: 130 },
    { field: "confirmations", headerName: "confirmations", width: 130 },
    { field: "txreceipt_status", headerName: "txreceipt_status", width: 130 },
  ];

  return (
    <div className="App">
      <header className="App-header">Ethereum blockchain transactions</header>
      <div className="App-container">
        <div className="App-form">
          <TextField
            id="outlined-basic"
            label="Address wallet"
            variant="outlined"
            onChange={(e) => setAddressWallet(e.target.value)}
            value={addressWallet}
          />
          <TextField
            id="outlined-basic"
            label="Starting block"
            variant="outlined"
            type="number"
            onChange={(e) => setStartingBlock(e.target.value)}
            value={startingBlock}
          />
          <Button onClick={() => getTransactionsApi()} variant="contained">
            Search transactions
          </Button>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              format="YYYY/MM/DD"
              disabled={!transactions.length}
              value={dateForAmount}
              onChange={(dateForAmount) => setDateForAmount(dateForAmount)}
            />
          </LocalizationProvider>
          <Button
            disabled={!transactions.length}
            onClick={() => handleSummingExactAmount()}
            variant="contained"
          >
            Total amount of ETH
          </Button>
        </div>
        <div className="App-total-info">
          <div>{<div>Total ETH Amount on Date: {totalAmount}</div>}</div>
        </div>
        <DataGrid
          getRowId={(row) => row?.blockNumber + row?.hash}
          rows={transactions}
          columns={columns}
          loading={loading}
          initialState={{
            pagination: {
              paginationModel: { page: 1, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10]}
        />
      </div>
    </div>
  );
}

export default App;
