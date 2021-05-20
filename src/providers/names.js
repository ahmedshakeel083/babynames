import React, { createContext, useContext } from 'react';
import {names} from '../data';

//Create a context
const NamesContext = createContext();

//Create Context Provider
export const NamesProvider = ({ children }) => {
    return <NamesContext.Provider value={names}>{children}</NamesContext.Provider>
}

export const useNames = () => {
    const names = useContext(NamesContext);
    if(!names) throw new Error('You probably forgot to wrap App componenent in <NamesProvider>');
    return names;
}

