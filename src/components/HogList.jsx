import React from 'react'
import HogCard from './HogCard';


const HogList =({hogs}) => {
  return (
    <div className="ui grid container">
      {hogs.map(hog => (
        <div className="ui grid container">
          <HogCard hog={hog}/>
          </div>
      ))}
    </div>
  );
};

export default HogList;
