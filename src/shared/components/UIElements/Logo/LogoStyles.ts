import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    Logo: {
        maxWidth: '160px',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            maxWidth: '200px',
        },
    },
}));

export default useStyles;
