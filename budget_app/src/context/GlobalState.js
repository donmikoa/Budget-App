import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Creating the Initial State
const initialState = {
	transactions: [],
};

//Creating the Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	//Actions to be taken
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
				transaction: state.transactions,
				deleteTransaction,
				addTransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
