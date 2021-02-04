import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    Form: {
        width: '94%',
        margin: '10px auto',
    },
    ErrorContainer: {
        textAlign: 'left',
    },
    Error: {
        color: 'red',
    },
    FormElementContainer: {
        textAlign: 'right',
    },
}));

export default useStyles;
