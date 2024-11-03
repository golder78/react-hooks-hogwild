import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";
import React,{useState} from "react";
import FilterSort from './FilterSort'; 



const App = () => {
  const [hogsData, sethogsData] = useState(hogs);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  
  const filteredHogs = hogsData
    .filter(hog => (filter === 'greased' ? hog.greased : true)) // Adjust according to your data structure
    .sort((a, b) => {
      if (sort === 'weight') return a.weight - b.weight;
      if (sort === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div>
      <Nav />
      <FilterSort setFilter={setFilter} setSort={setSort} />
      <HogList hogs={filteredHogs} />
    </div>
  );
};

export default App;
