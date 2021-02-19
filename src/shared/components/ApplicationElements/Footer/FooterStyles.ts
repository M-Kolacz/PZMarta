import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, spacing }) => ({
    FooterContainer: {
        borderTop: `10px solid ${palette.primary.main}`,
        marginTop: spacing(1.25),
    },
    FooterCopyright: {
        padding: spacing(1.25, 0, 1.875, 1.25),
        maxWidth: '50%',
    },
    RegulationsContainer: {
        display: 'flex',
    },
    RegulationsPrivacy: {
        borderLeft: `1px solid ${palette.grey[600]}`,

        padding: spacing(0, 0.675),
    },
    RegulationsRules: {
        borderLeft: `1px solid ${palette.grey[600]}`,
        paddingRight: '10px',
        paddingLeft: '5px',
        padding: spacing(0, 1.25, 0, 0.675),
    },
}));

export default useStyles;
