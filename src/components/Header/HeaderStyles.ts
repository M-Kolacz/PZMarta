import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    NavigationContainer: {
        marginTop: '10px',
    },

    Logo: {
        maxWidth: '160px',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            maxWidth: '200px',
        },
    },

    ComunicationContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingRight: '10px',
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'flex-end',
        },
    },

    Button: {
        color: 'white',
        marginRight: '10px',
    },

    ContactContainer: {
        textAlign: 'right',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '10px',
            paddingRight: '10px',
            borderLeft: '1px solid gray',
        },
    },

    ContactText: {
        fontSize: '14px',
        color: 'gray',
    },
}));

export default useStyles;
