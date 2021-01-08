import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    FooterContainer: {
        borderTop: `10px solid ${theme.palette.primary.main}`,
        marginTop: '10px',
    },
    FooterCopyright: {
        padding: '10px 0 15px 10px',
        maxWidth: '50%',
    },
    RegulationsContainer: {
        display: 'flex',
    },
    RegulationsPrivacy: {
        borderLeft: '1px solid gray',
        paddingRight: '5px',
        paddingLeft: '5px',
    },
    RegulationsRules: {
        borderLeft: '1px solid gray',
        paddingRight: '10px',
        paddingLeft: '5px',
    },
}));

export default useStyles;
