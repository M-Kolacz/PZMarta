import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
    ActionButton: {
        [breakpoints.down('xs')]: {
            width: '100%',
            margin: `${spacing(0.5, 0)} !important`,
        },
    },
    DialogActions: {
        [breakpoints.down('xs')]: {
            flexWrap: 'wrap',
        },
    },
}));

export default useStyles;
