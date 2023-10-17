import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const {expenses} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        const val = event.target.value;
        if (val > 20000) {
            alert('Budget amount cannot exceed $20000');
            setNewBudget(20000);
        }
        else if (val < totalExpenses) {
            alert('Budget cannot be under expense amount $' + totalExpenses);
            setNewBudget(totalExpenses);
        }
        else setNewBudget(val);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: $</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
