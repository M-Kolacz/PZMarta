import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    RadioGroup: {
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
        },
    },
    LabelGrid: {
        display: 'flex',
        alignItems: 'center',
    },
    LabelTitle: {
        color: theme.palette.primary.main,
    },
}));

export default useStyles;
