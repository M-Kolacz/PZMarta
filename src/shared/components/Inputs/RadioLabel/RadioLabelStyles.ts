import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    LabelGrid: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        position: 'relative',
    },
    LabelTitle: {
        color: theme.palette.primary.main,
        width: '100%',
    },
    HelperText: {
        position: 'absolute',
        bottom: '-15px',
        left: '5px',
        fontSize: '13px',
        color: 'red',
    },
}));

export default useStyles;
