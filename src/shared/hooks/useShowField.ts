import { useState } from 'react';
import { Event } from '../types/event';

export type useShowFieldProps = [boolean, (event: Event) => void];

export const useShowField = (inputValue: string) => {
    const [showPersonDeath, setShowPersonDeath] = useState(false);
    console.log('render useShowField');

    const showField = (event: Event) => {
        console.log('render inside useShowField');
        if (event.target.value == inputValue) {
            setShowPersonDeath(true);
        } else {
            setShowPersonDeath(false);
        }
    };
    return [showPersonDeath, showField] as useShowFieldProps;
};
