import React from 'react';

const Reset = ({ search, setSearch }) => {
    if(search === '') return null;
    return <button className='reset-search' onClick={() => setSearch('')}>Reset Search</button>
    
}

export default Reset;