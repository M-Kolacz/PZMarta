import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
    MessageContainer: {
        margin: spacing(0, 'auto'),
        padding: spacing(1),
    },
    EnvelopeSvg: {
        width: '100%',
        maxHeight: '300px',
    },
    Title: {
        margin: 'auto',
    },
}));

export default useStyles;
