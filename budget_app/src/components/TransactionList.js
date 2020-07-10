import React, { useContext, Fragment } from 'react';
import { GlobalContext } from '../context/GlobalState';

function TransactionList() {
    
	const { transactions } = useContext(GlobalContext);

	return (
		<Fragment>
			<h3>History</h3>
			<ul className='List'>



            </ul>
		</Fragment>
	);
}

export default TransactionList;
