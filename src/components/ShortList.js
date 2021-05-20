import React from 'react';
import { useNames } from '../providers/names';
import { Name } from './Name';

export const ShortList = ({ shortlist, setShortlist }) => {
    
    const names = useNames();

    const selected = names.filter(item => shortlist.includes(item.id))

    const handleRemove = id => {
        setShortlist(shortlist.filter(i => i !== id))
    }

    return (
        <>
            <h3>Shorlisted Names</h3>
            <div className="short-list">
            <ul>
                {selected.map( item => {
                    return (
                        <Name id={item.id} name={item.name} sex={item.sex} onClickEvent={handleRemove} />
                        // <li className={item.sex} key={item.id}>
                        //     <button onClick={() => handleRemove(item.id)}>{item.name}</button>
                        // </li>
                    )
                })}
            </ul>
            </div>
            <hr />
        </>
    )
}
