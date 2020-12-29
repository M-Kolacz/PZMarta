import React from 'react';

import Answers from '../components/Answers/Answers';
import Navigation from '../components/Navigation/Navigation';

export interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
    return (
        <>
            <Navigation />
            <Answers />
        </>
    );
};

export default MainPage;
