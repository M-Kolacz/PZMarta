import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, breakpoints, palette }) => ({
    NavigationContainer: {
        margin: spacing(1.5, 0),
    },
    Logo: {
        fontSize: '0px',
        paddingLeft: spacing(1.25),
    },

    ComunicationContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingRight: spacing(1.25),
        [breakpoints.up('sm')]: {
            justifyContent: 'flex-end',
        },
    },

    Button: {
        marginRight: spacing(1.25),
    },

    ContactContainer: {
        textAlign: 'right',
        [breakpoints.up('sm')]: {
            paddingLeft: spacing(1.25),
            paddingRight: spacing(1.25),
            borderLeft: `1px solid ${palette.grey[800]}`,
        },
    },

    ContactText: {
        color: palette.grey[600],
    },
}));

export default useStyles;
