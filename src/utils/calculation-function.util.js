export const calculateIncomeAndExpenses = (transactionDetails) => {
    let income = 0.0;
    let expenses = 0.0;

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

export const storeDataInLocalStorage = (transactionDetails) => {
    return localStorage.setItem("transactionsDetails", JSON.stringify(transactionDetails));
}

export const getDataFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("transactionsDetails"))
}

export const deleteTransactionDetails = (transactionDetails, indexOfDeltingItem) => {
    return transactionDetails.filter((trans, index) => index !== indexOfDeltingItem);
}