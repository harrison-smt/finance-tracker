"use client";

// Objects
import { useState, useContext, useEffect } from "react";
import { financeContext } from "./lib/store/finance-context";
import { authContext } from  "./lib/store/auth-context";
import { currencyFormat } from "./lib/utils";
import ExpenseCategoryItem from "./components/ExpenseCategoryItem";

// Modals
import Modal from "./components/Modal"
import AddIncomeModal from "./components/modals/AddIncomeModal.js";
import AddExpensesModal from "./components/modals/AddExpensesModal.js";

// Sign In
import SignIn from  "./components/SignIn";

// Charts
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

 export default function Home() {

  const [showAddIncomeModal, setShowAddIncomeModal] = useState(false);

  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);

  const [balance, setBalance] = useState(0);

  const { expenses, income } = useContext(financeContext);
  const { user } = useContext(authContext);

  useEffect(() => {
    const newBalance = 
    income.reduce((total, i) => {
      return total + i.amount 
    }, 0) -
    expenses.reduce((total, e) => {
      return total + e.total
    }, 0);

    setBalance(newBalance);
  }, [expenses, income]);

  if(!user) {
    return (
      <SignIn />
    );
  }

  return ( 
    <>
    {/* Add Income Modal */}
    <AddIncomeModal 
      show = {showAddIncomeModal} 
      onClose = {setShowAddIncomeModal}
    />

    { /* Add Expenses Modal */}
    <AddExpensesModal
      show = {showAddExpenseModal}
      onClose = {setShowAddExpenseModal} 
      />
    
    <main className="container max-w-2xl px-6 mx-auto">
      <section className="py-3">
        <small className="text-violet-800 text-md">My Balance</small>
        <h2 className="text-4xl font-bold">{currencyFormat(balance)}</h2>
      </section>

      <section className="flex items-center gap-2 py-3">
        <button
        onClick={() => {
          setShowAddExpenseModal(true);
        }}
        className="btn btn-primary"
        >+ Expenses
        </button>


        <button 
        onClick={() => {
          setShowAddIncomeModal(true);
        }}
        className="btn btn-primary-outline"
        >+ Income</button>
      </section>

      {/* Expenses */}
      <section>
        <h3 className="text-2xl">My Expenses</h3>
        <div className="input-group mt-6">
          {expenses.map((expense) => {
            return (
              <ExpenseCategoryItem 
              key={expense.id}
              expense={expense}
              />
            );
          })}
        </div>
      </section>

      {/* Doughnut graph */}
      <section className="py-6">
        <a id="stats" />
        <h3 className="text-2xl">Stats</h3>
        <div className="w-1/2 mx-auto">
          <Doughnut data={{
            labels: expenses.map(expense => expense.title),
            datasets: [
              {
              label: "Expenses",
              data: expenses.map(expense => expense.total),
              backgroundColor: expenses.map(expense => expense.color),
              borderColor: ['rgb(241 245 249)'],
              borderWidth: 5,
              }
            ]
          }} />
        </div>
      </section>
    </main>
    </>
    );
}
