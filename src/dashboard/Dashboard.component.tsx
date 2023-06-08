import React, { useContext } from 'react';
import "./Dashboard.style.scss";
import Form from '../Form/Form.component';
import { TransactionDetailsContext } from '../contexts/transaction-details.context';
import { calculateIncomeAndExpenses } from '../utils/calculation-function.util';
import { TransactionHistory } from '../transaction-history/TransactionHistory.component';

const Dashboard = () => {

    const { transactionDetails } = useContext(TransactionDetailsContext);

    const { expenses, income } = calculateIncomeAndExpenses(transactionDetails);

    const balance: number = income - expenses;

    return (
        <div>
            <div className='dashboard'>
                <div className='income'>
                    <div className="income-bg"></div>
                    <div className="income-content">
                        <h1>Income</h1>
                        <h2>
                            ${income}
                        </h2>
                    </div>
                </div>

                <div className='expense-details'>
                    <div className='expense-details-bg'></div>
                    <div className='expense-details-content'>
                        <h1>Expense Tracker</h1>
                        <h2>Balance <br /> {balance >= 0 ? `$ ${balance}` : `- $${-1 * balance}`} </h2>

                        <Form />
                    </div>
                </div>

                <div className="expense">
                    <div className="expense-bg"></div>
                    <div className="expense-content">
                        <h1>Expenses</h1>
                        <h2>
                            ${expenses}
                        </h2>
                    </div>
                </div>
            </div>

            <TransactionHistory />
        </div>
    )
}

export default Dashboard;