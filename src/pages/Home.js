import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { getData } from '../utils/config';

const Home = () => {

    const [searchInputBoxValue, setSearchInputBoxValue] = useState('');
    const [searchResults, setSearchResults] = useState(null);

    const handleSearchChange = ( { target: { value }}) => {
        setSearchInputBoxValue(value);
    };

    const searchButtonHandler = () => {
        getData(`/search/shows?q=${searchInputBoxValue}`)
        .then(res => setSearchResults(res))
    };

    const handleKeyUp = ({ keyCode }) => {
        if (keyCode === 13) {
            searchButtonHandler();
        }
    };

    const renderSearchResults = () => {
        console.log(searchResults);
        if (searchResults && searchResults.length === 0){
            return <div>No results</div>;
        }
    }

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
            { renderSearchResults() }
        </MainPageLayout>
    )
};

export default Home;