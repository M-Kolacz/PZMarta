import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    Button: {
        color: theme.palette.brokenWhite?.main,
    },
}));

export default useStyles;
