import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    FooterContainer: {
        borderTop: `10px solid ${theme.palette.primary.main}`,
        marginTop: theme.spacing(1.25),
    },
    FooterCopyright: {
        padding: theme.spacing(1.25, 0, 1.875, 1.25),
        maxWidth: '50%',
    },
    RegulationsContainer: {
        display: 'flex',
    },
    RegulationsPrivacy: {
        borderLeft: `1px solid ${theme.palette.grey[600]}`,

        padding: theme.spacing(0, 0.675),
    },
    RegulationsRules: {
        borderLeft: `1px solid ${theme.palette.grey[600]}`,
        paddingRight: '10px',
        paddingLeft: '5px',
        padding: theme.spacing(0, 1.25, 0, 0.675),
    },
}));

export default useStyles;
