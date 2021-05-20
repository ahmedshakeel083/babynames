import React , { useEffect, useRef } from 'react';

const Search = ({ search, setSearch}) => {
    
    const inputRef = useRef();
    
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    
    const handleSearch = event => {
        setSearch(event.target.value)
    }
    
    return (
        <header>
            <input ref={inputRef} type="text" placeholder="Search" value={search} onChange={handleSearch} />
        </header>
    )
}

export default Search;