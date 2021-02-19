import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    FormikForm: {
        width: '100%',
        margin: theme.spacing(0, 3),
    },
    FormFooter: {
        textAlign: 'right',
    },
    FormButton: {
        marginRight: theme.spacing(1.25),
    },
}));

export default useStyles;
