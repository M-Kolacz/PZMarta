import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    ButtonBorder: {
        borderRadius: '10px',
        border: '2px solid white',
        margin: '0 auto',
    },
    ButtonContainer: {
        margin: '5px auto',
        backgroundColor: 'white',
        textAlign: 'center',
        borderRadius: '10px',
        width: '96%',
        maxWidth: '280px',
        height: '92%',
    },
    ButtonTitle: {
        fontSize: '20px',
        width: '90%',
        margin: '0 auto',
    },
    ButtonDescription: {
        fontSize: '16px',
        color: 'gray',
        width: '90%',
        margin: '0 auto',
    },
}));

export default useStyles;
