import React from 'react';

import Answers from './Answers';
import { Navigation, NavigationItemList } from '../../shared/components/UIElements';

export interface MainPageProps {}

export const MainPage: React.FC<MainPageProps> = () => {
    return (
        <>
            <Navigation navigationTitle='Zgłoś szkodę'>
                <NavigationItemList />
            </Navigation>
            <Answers />
        </>
    );
};
