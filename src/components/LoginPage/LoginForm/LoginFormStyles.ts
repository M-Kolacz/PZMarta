import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, palette }) => ({
    Form: {
        width: '100%',
        padding: spacing(1.25, 2),
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
