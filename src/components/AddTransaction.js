import React, { useState, useRef } from "react";
import { useGlobalContext } from "../context/Context";

const AddTransaction = () => {
  const { addTransaction } = useGlobalContext();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const titleContainer = useRef(null);
  const amountContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: new Date().getTime().toString(),
      title: title,
      amount: +amount,
    };
    if (title !== "" && amount !== "") {
      addTransaction(newTransaction);
      titleContainer.current.value = "";
      amountContainer.current.value = "";
    } else {
      console.log("oh shit! there's a problem");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
            ref={titleContainer}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
            ref={amountContainer}
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
