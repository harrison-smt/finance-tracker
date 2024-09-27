import { useRef, useContext } from 'react';
import { currencyFormat } from "../../lib/utils";

// Context
import { financeContext } from "../../lib/store/finance-context";
import { authContext } from "../../lib/store/auth-context";

// Icons
import {FaRegTrashAlt} from "react-icons/fa";

import Modal from "../Modal";

import { toast } from "react-toastify";

function AddIncomeModal({show, onClose}) {
    const amountRef = useRef();
    const descriptionRef = useRef();
    const {income, addIncomeItem, removeIncomeItem} = useContext(financeContext);
    const { user } = useContext(authContext);
 
      // Handler Functions
    const addIncomeHandler = async (e)=> {
        e.preventDefault()

        const newIncome = {
            amount: +amountRef.current.value,
            description: descriptionRef.current.value,
            createdAt: new Date(),
            uid: user.uid,
        };

        try {
            addIncomeItem(newIncome);
            descriptionRef.current.value = "";
            amountRef.current.value = "";
            toast.success("Income Added Successfully!");
        } catch(error) {
            console.log(error.message);
            toast.error(error.message);
        }

    };

    const deleteIncomeEntryHandler = async(incomeId) => {
        try {
            removeIncomeItem(incomeId);
            toast.success("Income Deleted Successfully."); 
        } catch(error) {
            console.log(error.message);
            toast.error(error.message);
        }
    };

    return (
        <Modal show={show} onClose={onClose}>
            <form onSubmit={addIncomeHandler} className="input-group">
                <div className="input-group">
                    <label htmlFor="amount">Income Amount</label>
                    <input 
                    className="text-black"
                    type="number" 
                    name="amount"
                    ref={amountRef}
                    min={.01} 
                    step={.01} 
                    placeholder="Enter income amount" />
                </div>

                <div className="input-group">
                    <label htmlFor="description">Description</label>
                    <input 
                    className="text-black"
                    type="text" 
                    name="description"
                    ref={descriptionRef}
                    placeholder="Enter income description" />
                </div>
                
                <button type="submit" className="btn border border-slate-100 text-slate-100">
                    + Add Entry
                </button>

            </form>

            <div className="flex flex-col gap-4 mt-6">
                <h3 className="text-2xl font-bold">Income History</h3>

                {income.map((i) => {
                return (
                    <div className="flex item-center justify-between" key={i.id}>
                    <div>
                        <p className="font-semibold">{i.description}</p>
                        <small className="text-xs">{i.createdAt.toISOString()}</small>
                    </div>
                    <p className="flex items-center gap-2">
                        {currencyFormat(i.amount)}
                        <button onClick={() => { deleteIncomeEntryHandler(i.id)}}>
                        <FaRegTrashAlt />
                        </button>
                    </p>

                    </div>
                );
                })}
            </div>
        </ Modal>
    );
}

export default AddIncomeModal;