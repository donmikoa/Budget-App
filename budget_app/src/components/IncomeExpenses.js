import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
	const { transactions } = useContext(GlobalContext);

	const amount = transactions.map((transaction) => transaction.amount);

	return <div>Income Expense</div>;
};

export default IncomeExpenses;
