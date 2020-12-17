import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    ButtonContainer: {
        [theme.breakpoints.up('sm')]: {
            paddingRight: '10px',
        },
    },
    Button: {
        color: 'white',
    },
}));

export default useStyles;
