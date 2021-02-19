import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, palette }) => ({
    SectionTitle: {
        width: '100%',
        margin: spacing(1.25, 'auto'),
        padding: spacing(1, 0),
        borderBottom: `1px solid ${palette.primary.main}`,
        letterSpacing: '1px',
        color: palette.primary.main,
        textTransform: 'uppercase',
    },
}));

export default useStyles;
