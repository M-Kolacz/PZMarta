import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import AccessibleIcon from '@material-ui/icons/Accessible';
import HouseIcon from '@material-ui/icons/House';
import { makeStyles } from '@material-ui/core/styles';

const style = { fontSize: '38px' };

export const NotificationButtons = [
    {
        title: 'Komunikacyjna',
        description: 'w pojeździe lub ruchomości, uraz ciała, zgon     ',
        documents: [
            'numer polisy',
            'dowód rejestracyjny swojego pojazdu',
            'dane osobowe uczestników zdarzenia',
            'oświadczenie sprawcy (w przypadku szkody OC)',
            'numer konta bankowego',
        ],
        icon: <AirportShuttleIcon style={style} />,
    },
    {
        title: 'Szkoda majątkowa',
        description: 'w mieniu z polisy domu, mieszkania, OC w życiu prywatnym',
        documents: ['numer polisy', 'dokumenty związane z roszczeniem', 'dnumer konta bankowego'],
        icon: <HouseIcon style={style} />,
    },
    {
        title: 'NNW',
        description: 'szkoda z ubezpieczenia następstw nieszczęśliwych wypadków',
        documents: [
            'numer polisy',
            'dane osobowe Ubezpieczonego/Opiekuna prawnego',
            'dokumenty związane z roszczeniem',
            'numer konta bankowego',
            'rachunki i faktury za leczenie, jeśli takie posiadasz',
        ],
        icon: <AccessibleIcon style={style} />,
    },
];
