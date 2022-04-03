import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';

const Home = () => {

    const [text, setText] = useState('')
    const [googleSearch, setGoogleSearch] = useState([]);
    const changeKey = (e) => {
        setText(e?.target?.value);
    }
    useEffect(() => {
        const url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyCZWVeBBpskK6yj5LvETf1NSdGYkoBHNI0&cx=017576662512468239146:omuauf_lfve&q=${text}`
        fetch(url)
            .then(res => res.json())
            .then(data => setGoogleSearch(data?.items))

    }, [text])
    
    return (
        <div className='mt-12'>
            <h1 className='cursor-pointer text-5xl text-center mb-6 font-bold '><span className='text-blue-500'>G</span><span className='text-red-500'>o</span><span className='text-yellow-400'>o</span><span className='text-blue-500'>g</span><span className='text-green-600'>l</span><span className='text-red-500'>e</span><span className='text-pink-600'> Search</span></h1>
            <div className='flex justify-center'>
                <input onChange={changeKey} className='p-1 w-2/4 rounded-full border-2 ' type="search" placeholder='Google Search' name="" id="" />
            </div>
            <div>
                <div>
                    {
                        googleSearch !== undefined && googleSearch.map(search=><Search search={search}></Search>)
                    }
                   
                </div>
            </div>
        </div>
    );
};


export default Home;