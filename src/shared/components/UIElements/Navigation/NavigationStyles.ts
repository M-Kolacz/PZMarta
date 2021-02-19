import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    NotificationContainer: {
        marginTop: theme.spacing(1.25),
        paddingBottom: theme.spacing(1.25),
        backgroundColor: theme.palette.primary.main,
    },
    NotificationTitle: {
        margin: theme.spacing(1.25, 'auto', 2.5),
        textAlign: 'center',
        letterSpacing: '1px',
        color: theme.palette.brokenWhite!.main,
    },
}));

export default useStyles;
