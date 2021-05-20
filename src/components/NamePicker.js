import React from 'react';
import { useNames } from '../providers/names';
import { Name } from './Name';


const NamePicker = ({ search, shortlist, setShortlist }) => {
    
    const names = useNames();

    const handleShortlist = id => {
        setShortlist([...shortlist, id ]);
    }

    return (
    <ul>
        {
            names
            .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
            .filter(item => !shortlist.includes(item.id))
            .map( item => {
                return (
                    <Name id={item.id} name={item.name} sex={item.sex} onClickEvent={handleShortlist} />
                ) 
            })
        }
    </ul>
        
    )
}

export default NamePicker;