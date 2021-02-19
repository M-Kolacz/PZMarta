import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    Form: {
        width: '100%',
        padding: theme.spacing(1.25, 2),
    },
    ErrorContainer: {
        textAlign: 'left',
    },
    Error: {
        color: theme.palette.error.main,
    },
    FormElementContainer: {
        textAlign: 'right',
    },
}));

export default useStyles;
