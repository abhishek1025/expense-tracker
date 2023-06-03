
import { combineReducers } from "@reduxjs/toolkit";
import { transactionDetailsReducer } from "./transaction-details/transaction-details.reducer";

export const rootReducer = combineReducers({
    transactions: transactionDetailsReducer
})