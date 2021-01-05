import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    Container: {
        padding: '1px',
        border: '3px solid #fff',
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
        paddingRight: '10px',
    },
    DetailsContainer: {
        flexDirection: 'column',
    },
    ExpandIcon: {
        color: theme.palette.secondary.main,
    },
    Button: {
        color: theme.palette.brokenWhite?.main,
    },
    NotificationItems: {
        margin: '0',
    },
}));

export default useStyles;
