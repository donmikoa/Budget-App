import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);

	const { addTransaction } = useContext(GlobalContext);

	return <div>Add Transaction</div>;
};

export default AddTransaction;
