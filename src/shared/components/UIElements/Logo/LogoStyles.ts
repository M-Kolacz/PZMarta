import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints }) => ({
    Logo: {
        maxWidth: '160px',
        width: '100%',
        [breakpoints.up('sm')]: {
            maxWidth: '200px',
        },
    },
}));

export default useStyles;
