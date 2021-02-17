import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    AnswersTitle: {
        color: 'gray',
        fontSize: '42px',
        width: '100%',
        textAlign: 'center',
    },
    AccordeonOrder: {
        [theme.breakpoints.up('md')]: {
            order: 2,
        },
    },
}));

export default useStyles;
