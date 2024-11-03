import React from 'react'

const FilterSort = ({ setFilter, setSort }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <div>
      <select onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="greased">Greased</option>
        <option value="ungreased">Ungreased</option>
      </select>
      <select onChange={handleSortChange}>
        <option value="">None</option>
        <option value="weight">Weight</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
};

export default FilterSort;
