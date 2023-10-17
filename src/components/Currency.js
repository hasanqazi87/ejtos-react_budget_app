import React, { useContext } from 'react';
import {AppContext} from '../context/AppContext';

const Currency = () => {
    const {dispatch} = useContext(AppContext);
    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    };
    return (
        <div className='alert alert-primary'>
        <span>Currency: </span>
        <select style={{backgroundColor: '#badbbc'}} id='currency' onChange={evt=>changeCurrency(evt.target.value)}>
            <option value='$'>$ Dollar</option>
            <option value='£'>£ Pound</option>
            <option value='€'>€ Euro</option>
            <option value='₹'>₹ Ruppee</option>
        </select>
        </div>
    );
};

export default Currency;