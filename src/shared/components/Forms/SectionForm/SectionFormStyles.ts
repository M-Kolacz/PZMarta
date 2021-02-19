import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    SectionTitle: {
        width: '100%',
        margin: theme.spacing(1.25, 'auto'),
        padding: theme.spacing(1, 0),
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        letterSpacing: '1px',
        color: theme.palette.primary.main,
        textTransform: 'uppercase',
    },
}));

export default useStyles;
