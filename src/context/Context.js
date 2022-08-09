import React from "react";
import { useContext, useEffect } from "react";
import { useReducer } from "react";
import reducer from "./Reducer";

const getStorage = () => {
  if (localStorage.getItem("transactions")) {
    return JSON.parse(localStorage.getItem("transactions"));
  } else {
    return [];
  }
};

const AppContext = React.createContext();
const defaultState = {
  transactions: getStorage(),
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const addTransaction = (item) => {
    dispatch({ type: "ADD_TRANSACTION", payload: item });
  };
  const removeTransaction = (id) => {
    dispatch({ type: "REMOVE_TRANSACTION", payload: id });
  };

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);
  const moneyFormatter = (num) => {
    let p = num.toFixed(2).split(".");
    return (
      " $ " +
      p[0]
        .split("")
        .reverse()
        .reduce((acc, num, i, orig) => {
          return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
        }, "") +
      "." +
      p[1]
    );
  };

  return (
    <AppContext.Provider
      value={{
        addTransaction,
        removeTransaction,
        moneyFormatter,
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
