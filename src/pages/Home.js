import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {

    const [searchInputBoxValue, setSearchInputBoxValue] = useState('');

    const handleSearchChange = ( { target: { value }}) => {
        setSearchInputBoxValue(value);
    };

    return(
        <MainPageLayout>
            <label htmlFor="search-input">Search</label>
            <input
                id="search-input"
                type="text"
                placeholder="Enter search term"
                onChange={handleSearchChange}
            />
        </MainPageLayout>
    )
};

export default Home;