import React, { ChangeEvent, useContext, useState } from 'react'
import { TransactionDetailsContext } from '../contexts/transaction-details.context';

export interface IformFields {
    transaction: string;
    date: string;
    amount: string;
    incomeSource?: string;
    expenseName?: string;
    paymentMethod: string;
}

const defaultFormFields: IformFields = {
    transaction: '',
    date: '',
    amount: '',
    paymentMethod: '',
};

const Form = () => {

    const [transactionType, setTransactionType] = useState("income");
    const [formFields, setFormFields] = useState<IformFields>({ ...defaultFormFields, transaction: "income" });

    const { transactionDetails, setTransactionDetails } = useContext(TransactionDetailsContext);

    const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        const { name, value } = e.target;

        if (name === "transaction") {
            setTransactionType(value);
        }

        return setFormFields({ ...formFields, [name]: value, })
    }

    const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (transactionDetails) {
            return setTransactionDetails([...transactionDetails, formFields]);
        } else {
            return setTransactionDetails([formFields]);
        }
    }


    return (
        <form onSubmit={submitHandler}>
            <select name="transaction" onChange={changeHandler}>
                <option value="income">Income</option>
                <option value="expenses">Expense</option>
            </select>

            <input type="date" name="date" onChange={changeHandler} required /> <br />
            <input type="number" name="amount" step="any" placeholder='Amount' min={1} onChange={changeHandler} required />

            {transactionType === "income" &&
                <>
                    <select name="incomeSource" onChange={changeHandler} required>
                        <option value="">Select Income Source</option>
                        <option value="salary">Salary</option>
                        <option value="rent">Rent</option>
                        <option value="self-employement">Self Employemnt</option>
                        <option value="investment">Investment</option>
                        <option value="gift income">Git Income</option>
                        <option value="others">others</option>
                    </select>

                </>
            }

            {
                transactionType === "expenses" &&
                <input name='expenseName' type='text' placeholder='Expense Name' onChange={changeHandler} required />
            }

            <select name="paymentMethod" onChange={changeHandler} required>
                <option value="">Select Payment Method</option>
                <option value="cash">Cash</option>
                <option value="check">Check</option>
                <option value="online payment">Online Payment</option>
            </select>

            <div className='add-btn'>
                <button type='submit'>
                    Add Item
                </button>
            </div>

        </form>
    )
}

export default Form;


