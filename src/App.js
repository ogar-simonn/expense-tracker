import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";

import { useGlobalContext } from "./context/Context";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
function App() {
  return (
    <div className="container">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
