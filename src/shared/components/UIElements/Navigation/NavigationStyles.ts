import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, palette }) => ({
    NotificationContainer: {
        marginTop: spacing(1.25),
        paddingBottom: spacing(1.25),
        backgroundColor: palette.primary.main,
    },
    NotificationTitle: {
        margin: spacing(1.25, 'auto', 2.5),
        textAlign: 'center',
        letterSpacing: '1px',
        color: palette.brokenWhite!.main,
    },
}));

export default useStyles;
