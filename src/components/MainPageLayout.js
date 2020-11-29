import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
    return (
        <div>
            <Title
                title="Films App"
                subtitle="Allows to find a film or an actor"
            />   
            <Navs />
            { children }
        </div>
    );
};

export default MainPageLayout;