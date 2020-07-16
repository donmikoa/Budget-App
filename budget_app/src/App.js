import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import TransactionList from './components/TransactionList';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';

import './App.css';

function App() {
	return (
		<GlobalProvider>
			<Header />
			<div className='container'>
				<Balance />
				<IncomeExpenses />

				<TransactionList />
			</div>
		</GlobalProvider>
	);
}

export default App;
