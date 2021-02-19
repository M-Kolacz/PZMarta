import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    RegistrationFormContainer: {
        margin: theme.spacing(0, 'auto'),
    },
    Form: {
        width: '100%',
        margin: theme.spacing(1.25, 'auto'),
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
