import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
    FormikForm: {
        width: '100%',
        margin: spacing(0, 3),
    },
    FormFooter: {
        textAlign: 'right',
    },
    FormButton: {
        marginRight: spacing(1.25),
    },
}));

export default useStyles;
