import React from "react";
import { useGlobalContext } from "../context/Context";
const Balance = () => {
  const { moneyFormatter, transactions } = useGlobalContext();
  const amounts = transactions.map((item) => item.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);
  const balance = income - -expense;
  return (
    <div>
      <h4>BALANCE</h4>
      <h1>{moneyFormatter(balance)}</h1>
    </div>
  );
};

export default Balance;
