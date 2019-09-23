import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className='pa2 '>
      <input 
      className='pa3 tc ba br4 br--bottom b--light-blue bg-light-green'
      type='search' 
      placeholder='search friends' 
      onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;