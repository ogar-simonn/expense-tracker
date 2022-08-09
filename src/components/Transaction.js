import React from "react";
import { useGlobalContext } from "../context/Context";
const Transaction = ({ title, amount, id }) => {
  const { transactions, removeTransaction } = useGlobalContext();
  const sign = amount < 0 ? "" : "+";
  return (
    <div className="transaction-container">
      <button className="remove-btn" onClick={() => removeTransaction(id)}>
        x
      </button>
      <li className={`${amount < 0 ? "negative" : "positive"}`}>
        {title}
        <span className="amount">
          {sign} {amount}
        </span>
      </li>
    </div>
  );
};
export default Transaction;
