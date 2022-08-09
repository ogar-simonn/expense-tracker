import React from "react";
import Transaction from "./Transaction";
import { useGlobalContext } from "../context/Context";
const TransactionList = () => {
  const { transactions } = useGlobalContext();
  return (
    <div className="">
      <h3>History</h3>
      <ul className="list">
        {transactions.map((item) => {
          return <Transaction {...item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
