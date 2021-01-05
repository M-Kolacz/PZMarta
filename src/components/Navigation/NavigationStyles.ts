import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    NotificationContainer: {
        marginTop: '10px',
        backgroundColor: theme.palette.primary.main,
        paddingBottom: '10px',
    },
    NotificationTitle: {
        marginTop: '10px',
        marginBottom: '20px',
        textAlign: 'center',
        color: theme.palette.brokenWhite!.main,
        fontSize: '42px',
        letterSpacing: '1px',
        width: '100%',
    },
}));

export default useStyles;
