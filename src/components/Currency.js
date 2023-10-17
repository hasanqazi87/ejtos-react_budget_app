import React from 'react';

const Currency = () => {
    return (
        <div className='alert alert-primary'>
        <span>Currency: </span>
        <select style={{backgroundColor: '#badbbc'}}>
            <option value='usd'>$ Dollar</option>
            <option value='gbp'>£ Pound</option>
            <option value='eur'>€ Euro</option>
            <option value='ind'>₹ Ruppee</option>
        </select>
        </div>
    );
};

export default Currency;