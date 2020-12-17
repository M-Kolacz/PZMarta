import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    NotificationContainer: {
        marginTop: '10px',
        backgroundColor: theme.palette.primary.main,
    },
    NotificationTitle: {
        textAlign: 'center',
        color: theme.palette.brokenWhite!.main,
        fontSize: '32px',
        letterSpacing: '1px',
    },
}));

export default useStyles;
