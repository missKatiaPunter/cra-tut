import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { getData } from '../utils/config';

const Home = () => {

    const [searchInputBoxValue, setSearchInputBoxValue] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [peopleOrShows, setPeopleOrShows] = useState('people');

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
        if(searchResults && searchResults.length === 0){
            return <div>No results</div>;
        }
        if(searchResults && searchResults.length > 0) {
            return (
                <div>
                    { searchResults.map(item => {
                        const { id, name } = item.show;
                        return <div key={id}>{ name }</div>;
                    })
                }
                </div>
            )};
        return null;
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
            <div data-testid="peep-show-buttons">
                <label htmlFor="search-by-people">Search By People
                    <input type="radio" id="search-by-people" on/>
                </label>
                <label htmlFor="search-by-shows">Search By Shows
                    <input type="radio" id="search-by-shows"/>
                </label>
            </div>
            <button
                onClick={ searchButtonHandler }
            >
                Search
            </button>
            { renderSearchResults() }
        </MainPageLayout>
    )
};

export default Home;