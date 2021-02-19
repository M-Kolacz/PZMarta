import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
    RadioGroup: {
        [breakpoints.up('sm')]: {
            flexDirection: 'row',
        },
    },
    LabelGrid: {
        display: 'flex',
        alignItems: 'center',
    },
    LabelTitle: {
        color: palette.primary.main,
    },
    FormControlLabel: {
        width: '180px',
    },
}));

export default useStyles;
