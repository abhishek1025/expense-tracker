import './TransactioinHistory.style.scss';
import { useSelector } from 'react-redux';
import { deleteTransactions, selectTransactionDetails } from '../store/transaction-details/transaction-details.reducer';
import { useDispatch } from 'react-redux';

export const TransactionHistory = () => {

    const { transactionDetails } = useSelector(selectTransactionDetails);

    const dispatch = useDispatch();

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
                                <button onClick={() => dispatch(deleteTransactions(index))}>Delete</button>
                            </div>

                        </div>
                    )
                })}

            </div>

        </div >
    )
}
