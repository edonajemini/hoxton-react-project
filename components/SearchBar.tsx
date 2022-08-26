import React from "react";
import SelectSearch from 'react-select-search';

export function SearchBar(){
    const options = [
        {name: 'Swedish', value: 'sv'},
        {name: 'English', value: 'en'},
        {name:'Albanian', value: 'al'}
    ];
    return(
        <div className="search-bar">
        <SelectSearch options={options} value="sv" name="language" placeholder="Choose your language" />
         <input className='side-bar-search' type="search" placeholder= "Search Twitter" ></input>
         </div>
    )
}