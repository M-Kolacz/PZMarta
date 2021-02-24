import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
    ErrorContainer: {
        margin: spacing(0, 'auto'),
        padding: spacing(1),
    },
    ErrorEmail: {
        width: '100%',
        maxHeight: '300px',
    },
    Title: {
        textAlign: 'center',
    },
}));

export default useStyles;
