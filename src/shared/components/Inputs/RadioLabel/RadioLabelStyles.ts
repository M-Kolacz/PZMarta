import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    LabelGrid: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        position: 'relative',
        marginBottom: '15px',
        [theme.breakpoints.up('md')]: {
            marginBottom: 0,
        },
    },
    LabelTitle: {
        color: theme.palette.primary.main,
        width: '100%',
    },
    HelperText: {
        position: 'absolute',
        bottom: '-20px',

        fontSize: '13px',
        color: 'red',
        [theme.breakpoints.up('md')]: {
            bottom: '-15px',
        },
    },
}));

export default useStyles;
