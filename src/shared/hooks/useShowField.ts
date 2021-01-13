import { useState } from 'react';
import { Event } from '../types/event';

export type useShowFieldProps = [boolean, () => (event: Event) => void];

export const useShowField = (condition: string) => {
    const [showPersonDeath, setShowPersonDeath] = useState(false);

    const showField = () => {
        return (event: Event) => {
            if (event.target.value === condition) {
                setShowPersonDeath(true);
            } else {
                setShowPersonDeath(false);
            }
        };
    };
    return [showPersonDeath, showField] as useShowFieldProps;
};
