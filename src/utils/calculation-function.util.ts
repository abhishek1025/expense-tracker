import { IformFields } from "../Form/Form.component";

export const calculateIncomeAndExpenses = (transactionDetails: IformFields[] | null): { expenses: number, income: number } => {
    let income: number = 0;
    let expenses: number = 0;

    if (transactionDetails) {
        transactionDetails.forEach(transactionDetail => {

            const { transaction, amount } = transactionDetail;

            if (transaction === "income") {
                income += parseFloat(amount);
            } else {
                expenses += parseFloat(amount);
            }
        });

    }
    return { expenses, income }
}

export const storeDataInLocalStorage = (transactionDetails: IformFields[] | null): void => {
    localStorage.setItem("transactionsDetails", JSON.stringify(transactionDetails));
}

export const getDataFromLocalStorage = (): IformFields[] | null => {

    const dataFromLocalStorage = localStorage.getItem("transactionsDetails");

    if (dataFromLocalStorage) {
        return JSON.parse(dataFromLocalStorage);
    }

    return null;
}

export const deleteTransactionDetails = (indexOfDeltingItem: number, transactionDetails: IformFields[] | null): IformFields[] | null => {

    if (transactionDetails) {
        const newTransDetails = transactionDetails.filter((trans, index) => index !== indexOfDeltingItem);
        storeDataInLocalStorage(newTransDetails);
        return newTransDetails;
    }

    return null;
}