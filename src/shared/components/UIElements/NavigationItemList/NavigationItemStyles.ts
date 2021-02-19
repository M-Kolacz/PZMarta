import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, palette }) => ({
    NotificationItems: {
        margin: '0',
    },

    Container: {
        padding: spacing(0.125),
        border: `3px solid ${palette.common.white}`,
        '&:hover': {
            border: `3px solid ${palette.secondary.main}`,
        },
        '&:focus': {
            border: `3px solid ${palette.secondary.main}`,
        },
    },
    SummaryContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    SummaryIcon: {
        paddingRight: spacing(1.25),
    },
    DetailsContainer: {
        flexDirection: 'column',
    },
    ExpandIcon: {
        color: palette.secondary.main,
    },
}));

export default useStyles;
