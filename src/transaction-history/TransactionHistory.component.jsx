import React, { useContext } from 'react';
import './TransactioinHistory.style.scss';
import { TransactionDetailsContext } from '../contexts/transaction-details.context';
import { deleteTransactionDetails } from '../utils/calculation-function.util';

export const TransactionHistory = () => {

    const { transactionDetails, setTransactionDetails } = useContext(TransactionDetailsContext);

    const handleTransactionDetailsDeltOperation = (index) => {

        const updatedTransDetails = deleteTransactionDetails(index, transactionDetails);
        console.log(updatedTransDetails);
        return setTransactionDetails(updatedTransDetails);
    }

    return (
        <div className='transaction-history-wrapper'>
            <h1>Transaction History</h1>

            <div className="transaction-history">

                {transactionDetails && transactionDetails.map((trans, index) => {

                    const { transaction, date, amount, paymentMethod, incomeSource, expenseName } = trans;

                    return (
                        <div key={index} className={`transaction ${transaction === "income" ? 'green-border' : 'red-border'}`}>
                            <h3 className={transaction === "income" ? 'green' : 'red'}>{transaction.toUpperCase()}</h3>

                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <p>Amount: <i>${amount}</i></p>
                                <p>Date: {date}</p>
                            </div>

                            <p>
                                {
                                    transaction === "income" ? `Income Source: ${incomeSource}` : `Expense Name: ${expenseName}`
                                }
                            </p>

                            <p>
                                Payment Method: {paymentMethod}
                            </p>

                            <div className='delt-btn'>
                                <button onClick={() => handleTransactionDetailsDeltOperation(index)}>Delete</button>
                            </div>

                        </div>
                    )
                })}

            </div>

        </div >
    )
}
