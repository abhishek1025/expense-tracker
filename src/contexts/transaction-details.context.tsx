import React, { ReactElement, ReactNode, createContext, useEffect, useState } from "react";
import { getDataFromLocalStorage, storeDataInLocalStorage } from "../utils/calculation-function.util";

import { IformFields } from "../Form/Form.component";

interface Icontext {
    transactionDetails: IformFields[] | null,
    setTransactionDetails: (transactionDetails: IformFields[]) => void
}

interface IProviderProps {
    children: ReactNode;
}

//actual value we want to acess
export const TransactionDetailsContext = createContext<Icontext>({
    transactionDetails: null,
    setTransactionDetails: () => { }
});

//provider that will provide the value
export const TransactionDetailsProvider = ({ children }: IProviderProps): ReactNode => {

    const [transactionDetails, setTransactionDetails] = useState<IformFields[] | null>([]);

    const value = { transactionDetails, setTransactionDetails };

    useEffect(() => {

        if (transactionDetails?.length !== 0) {
            return storeDataInLocalStorage(transactionDetails);
        }
    }, [transactionDetails]);

    useEffect(() => setTransactionDetails(getDataFromLocalStorage()), [])

    return <TransactionDetailsContext.Provider value={value}>{children}</TransactionDetailsContext.Provider>
}