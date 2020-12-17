import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    NavigationContainer: {
        marginTop: '10px',
    },
    LogoContainer: {
        paddingLeft: '10px',
    },
    Logo: { maxWidth: '185px', width: '100%' },

    ComunicationContainer: {
        justifyContent: 'center',
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'flex-end',
        },
    },
    ButtonContainer: {
        [theme.breakpoints.up('sm')]: {
            paddingRight: '10px',
        },
    },
    Button: {
        color: 'white',
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
