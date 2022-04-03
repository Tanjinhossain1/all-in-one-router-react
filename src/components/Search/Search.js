import React from 'react';
import { Link } from 'react-router-dom';

const Search = ({ search }) => {
    console.log(search)
    const {title, link} = search;
  
    return (
        <div className='grid grid-cols-1 mt-12 m-12'>
              <a className='text-3xl' rel="noreferrer" target='_blank' href={link}>Link:<span className='underline text-blue-600 font-semibold'> {link} </span></a>
            <h1 className='text-2xl'>title: <span>{title}</span></h1>
          
        </div>
    );
};

export default Search;