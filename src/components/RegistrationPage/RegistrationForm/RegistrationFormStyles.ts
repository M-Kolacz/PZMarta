import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, palette }) => ({
    RegistrationFormContainer: {
        margin: spacing(0, 'auto'),
    },
    Form: {
        width: '100%',
        margin: spacing(1.25, 'auto'),
    },
    ErrorContainer: {
        textAlign: 'left',
    },
    Error: {
        color: palette.error.main,
    },
    FormElementContainer: {
        textAlign: 'right',
    },
}));

export default useStyles;
