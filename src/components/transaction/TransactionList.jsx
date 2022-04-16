import React, {useContext} from 'react';
import Transaction from './Transaction'
import { GlobalContext } from '../../context/GlobalState'


const TransactionList = () => {
    const {  transactions } = useContext(GlobalContext);
    return (
        <>
            <h3>Transaction History</h3>
            <ul className='list'>
                {transactions.map(transaction =>(< Transaction transaction={transaction}/>))}  
            </ul>
        </>
    )
}

export default TransactionList
