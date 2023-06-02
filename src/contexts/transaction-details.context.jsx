import { createContext, useEffect, useState } from "react";
import { getDataFromLocalStorage, storeDataInLocalStorage } from "../utils/calculation-function.util";

//actual value we want to acess
export const TransactionDetailsContext = createContext({
    transactionDetails: null,
    setTransactionDetails: () => null
});

//provider that will provide the value
export const TransactionDetailsProvider = ({ children }) => {
    
    const [transactionDetails, setTransactionDetails] = useState(null);
    const value = { transactionDetails, setTransactionDetails };

    useEffect(() => {
        if (transactionDetails) {
            return storeDataInLocalStorage(transactionDetails);
        }
    }, [transactionDetails]);

    useEffect(() => setTransactionDetails(getDataFromLocalStorage()), [])

    return <TransactionDetailsContext.Provider value={value}>{children}</TransactionDetailsContext.Provider>
}