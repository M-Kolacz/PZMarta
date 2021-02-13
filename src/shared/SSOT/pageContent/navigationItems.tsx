import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import AccessibleIcon from '@material-ui/icons/Accessible';
import HouseIcon from '@material-ui/icons/House';

const style = { fontSize: '38px', color: '#ef7239' };

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
        link: '/szkoda-komunikacyjna',
    },
    {
        title: 'Szkoda majątkowa',
        description: 'w mieniu z polisy domu, mieszkania, OC w życiu prywatnym',
        documents: ['numer polisy', 'dokumenty związane z roszczeniem', 'dnumer konta bankowego'],
        icon: <HouseIcon style={style} />,
        link: '/szkoda-majątkowa',
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
        link: '/szkoda-nnw',
    },
];
