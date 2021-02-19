import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    NotificationItems: {
        margin: '0',
    },

    Container: {
        padding: theme.spacing(0.125),
        border: `3px solid ${theme.palette.common.white}`,
        '&:hover': {
            border: `3px solid ${theme.palette.secondary.main}`,
        },
        '&:focus': {
            border: `3px solid ${theme.palette.secondary.main}`,
        },
    },
    SummaryContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    SummaryIcon: {
        paddingRight: theme.spacing(1.25),
    },
    DetailsContainer: {
        flexDirection: 'column',
    },
    ExpandIcon: {
        color: theme.palette.secondary.main,
    },
}));

export default useStyles;
