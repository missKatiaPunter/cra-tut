import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {

    const [searchInputBoxValue, setSearchInputBoxValue] = useState('');

    const handleSearchChange = ( { target: { value }}) => {
        setSearchInputBoxValue(value);
    };

    const searchButtonHandler = () => {
        fetch(`http://api.tvmaze.com/search/shows?q=${searchInputBoxValue}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        });
    };

    const handleKeyUp = ({ keyCode }) => {
        if (keyCode === 13) {
            searchButtonHandler();
        }
      };

    return(
        <MainPageLayout>
            <label htmlFor="search-input">Search</label>
            <input
                id="search-input"
                type="text"
                placeholder="Enter search term"
                onChange={ handleSearchChange }
                value={ searchInputBoxValue }
                onKeyUp={ handleKeyUp }
            />
            <button
                onClick={searchButtonHandler}
            >
                Search
            </button>
        </MainPageLayout>
    )
};

export default Home;