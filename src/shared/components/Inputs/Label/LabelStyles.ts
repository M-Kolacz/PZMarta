import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
    LabelGrid: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        position: 'relative',
    },
    LabelTitle: {
        color: palette.primary.main,
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
