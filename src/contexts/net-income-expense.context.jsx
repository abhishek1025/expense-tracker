import { createContext, useState } from "react";

export const NetIncomeExpenseContext = createContext({
    income: null,
    setIncome: () => null,
    expenses: null,
    setExpenses: () => null
});

export const NetIncomeExpenseProvicer = ({ children }) => {
    const [income, setIncome] = useState(null);
    const [expenses, setExpenses] = useState(null);
    const value = { income, setIncome, expenses, setExpenses };

    return <NetIncomeExpenseContext.Provider value={value}>{children}</NetIncomeExpenseContext.Provider>
}