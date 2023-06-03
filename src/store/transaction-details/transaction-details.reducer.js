import { createSlice, current } from "@reduxjs/toolkit"
import { calculateIncomeAndExpenses, deleteTransactionDetails } from "../../utils/calculation-function.util";

const INTITAL_STATE = {
    transactionDetails: null,
    income: 0,
    expenses: 0
}


const setIncomeAndExpenses = (state) => {
    const { income, expenses } = calculateIncomeAndExpenses(state.transactionDetails);
    state.expenses = expenses;
    state.income = income;
}

export const transactionDetailsSlice = createSlice({
    name: "transactions",
    initialState: INTITAL_STATE,
    reducers: {

        setTransactionDetails(state, action) {
            if (state.transactionDetails) {
                state.transactionDetails.push(action.payload);
            } else {
                state.transactionDetails = [action.payload];
            }
            setIncomeAndExpenses(state);
        },

        deleteTransactions(state, action) {
            state.transactionDetails = deleteTransactionDetails(current(state.transactionDetails), action.payload);
            setIncomeAndExpenses(state);
        }
    }
})



export const { setTransactionDetails, deleteTransactions } = transactionDetailsSlice.actions;

export const transactionDetailsReducer = transactionDetailsSlice.reducer;

export const selectTransactionDetails = (state) => state.transactions;



//Reducer function
// export const transactionDetailsReducer = (state = INTITAL_STATE, action) => {

//     const { type, payload } = action;

//     switch (type) {
//         case TRANSACTION_ACTION_TYPES.ADD_TRANSACTION_DETAIL:
//             return { ...state, transactionDetails: payload };
//         default:
//             return state;
//     }
// };