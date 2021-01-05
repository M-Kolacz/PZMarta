import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    SectionTitle: {
        width: '100%',
        fontSize: '21px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        paddingBottom: '5px',
        paddingTop: '10px',
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        margin: '10px auto',
        color: theme.palette.primary.main,
    },
}));

export default useStyles;
