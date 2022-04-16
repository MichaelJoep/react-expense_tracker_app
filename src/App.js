import React from 'react';
import './App.css';
import Balance from './components/balance/Balance';
import Header from './components/header/Header';
import IncomeExpense from './components/incomeExpense/IncomeExpense';
import TransactionList from './components/transaction/TransactionList';
import AddTransaction from './components/addtransaction/AddTransaction';

import {GlobalProvider}  from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
       <Header />
       <div className='container'>
         <Balance />
         <IncomeExpense />
         <TransactionList />
         <AddTransaction />
       </div>
    </GlobalProvider>
  );
}

export default App;
