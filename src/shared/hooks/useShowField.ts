import { useState } from 'react';
import { Event } from '../types/event';

export type useShowFieldProps = [boolean, (event: Event) => void];

export const useShowField = (inputValue: string) => {
    const [showPersonDeath, setShowPersonDeath] = useState(false);

    const showField = (event: Event) => {
        if (event.target.value === inputValue) {
            setShowPersonDeath(true);
        } else {
            setShowPersonDeath(false);
        }
    };
    return [showPersonDeath, showField] as useShowFieldProps;
};
