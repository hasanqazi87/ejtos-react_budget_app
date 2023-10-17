import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const {dispatch, currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td>
            <img onClick={event=> increaseAllocation(props.name)}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Flat_plus_icon.svg/512px-Flat_plus_icon.svg.png?20170316094926'
            alt='plus sign'
            width='30px'>
            </img>
        </td>
        <td>
            <img onClick={event=> decreaseAllocation(props.name)}
            src='https://thumbs.dreamstime.com/z/flat-round-minus-sign-red-icon-button-negative-symbol-isolated-white-background-flat-round-minus-sign-red-icon-button-negative-143476703.jpg'
            alt='minus sign'
            width='30px'>
            </img>
        </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
