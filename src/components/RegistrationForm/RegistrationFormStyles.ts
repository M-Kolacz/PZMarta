import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    RegistrationFormContainer: {
        margin: '0 auto',
    },
    Form: {
        width: '94%',
        margin: '10px auto',
    },
    ErrorContainer: {
        textAlign: 'left',
    },
    Error: {
        color: 'red',
    },
    FormElementContainer: {
        textAlign: 'right',
    },
}));

export default useStyles;
