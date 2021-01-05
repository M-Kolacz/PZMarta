import React from 'react';

import Answers from '../components/Answers/Answers';
import Navigation from '../components/Navigation/Navigation';
import NavigationItemList from '../shared/components/NavigationItem/NavigationItemList';

export interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
    return (
        <>
            <Navigation navigationTitle='Zgłoś szkodę'>
                <NavigationItemList />
            </Navigation>
            <Answers />
        </>
    );
};

export default MainPage;
