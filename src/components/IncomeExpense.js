import React from "react";
import { useGlobalContext } from "../context/Context";
const IncomeExpense = () => {
  const { transactions, moneyFormatter } = useGlobalContext();
  const amounts = transactions.map((item) => item.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);
  return (
    <div className="income-expense-container">
      <div>
        <h4>INCOME</h4>
        <p className="money plus">{moneyFormatter(income)}</p>
      </div>
      <div>
        <h4>EXPENSE</h4>
        <p className="money minus">{moneyFormatter(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
