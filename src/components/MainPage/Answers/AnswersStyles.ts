import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    AnswersTitle: {
        margin: theme.spacing(1.25, 0, 2.5),
        width: '100%',
        textAlign: 'center',
        color: theme.palette.grey[600],
    },
    AccordeonOrder: {
        [theme.breakpoints.up('md')]: {
            order: 2,
        },
    },
}));

export default useStyles;
