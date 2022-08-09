const reducer = (state, action) => {
  if (action.type === "ADD_TRANSACTION") {
    // console.log(action.payload);
    return {
      ...state,
      transactions: [action.payload, ...state.transactions],
    };
  }
  if (action.type === "REMOVE_TRANSACTION") {
    return {
      ...state,
      transactions: [...state.transactions].filter((item) => {
        return item.id !== action.payload;
      }),
    };
  }
  return state;
};

export default reducer;
