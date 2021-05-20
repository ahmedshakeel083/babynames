import React , { useState} from 'react';
import NamePicker from './components/NamePicker';
import Search from './components/Search';
import { ShortList } from './components/ShortList';
import Reset from './components/Reset';

function App() {

  const [search, setSearch] = useState('');
  const [shortlist, setShortlist] = useState([]);

  return (
    <>
    <Search search={search} setSearch={setSearch} />
    <ShortList shortlist={shortlist} setShortlist={setShortlist} />
    <NamePicker search={search} shortlist={shortlist} setShortlist={setShortlist} />
    <Reset search={search} setSearch={setSearch} />
    </>
  );
}

export default App;
