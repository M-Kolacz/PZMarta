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
        left: '13px',
        bottom: '0px',
        color: 'red',
        fontSize: '13px',
    },
}));

export default useStyles;
