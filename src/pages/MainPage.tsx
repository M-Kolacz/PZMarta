import React from 'react';

import Answers from '../components/Answers';
import Navigation from '../components/Navigation';
import NavigationItemList from '../shared/components/NavigationItemList';

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
