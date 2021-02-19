import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    NavigationContainer: {
        margin: theme.spacing(1.5, 0),
    },
    Logo: {
        fontSize: '0px',
        paddingLeft: theme.spacing(1.25),
    },

    ComunicationContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingRight: theme.spacing(1.25),
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'flex-end',
        },
    },

    Button: {
        marginRight: theme.spacing(1.25),
    },

    ContactContainer: {
        textAlign: 'right',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(1.25),
            paddingRight: theme.spacing(1.25),
            borderLeft: `1px solid ${theme.palette.grey[800]}`,
        },
    },

    ContactText: {
        color: theme.palette.grey[600],
    },
}));

export default useStyles;
