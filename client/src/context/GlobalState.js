import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';


//Creating the Initial State
const initialState = {
	transactions: [],
	error:null,
	loading:true
};

//Creating the Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	//Actions to be taken
	async function getTransactions(){
		try {
			const res = await axios.get('/api/v1/transactions');
			dispatch({
				type:'GET_TRANSACTIONS',
				payload:res.data.data
			})
		} catch (error) {
			
		}
	}

	function deleteTransaction(id) {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id,
		});
	}

	function addTransaction(transaction) {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
