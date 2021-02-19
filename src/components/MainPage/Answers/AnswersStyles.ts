import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
    AnswersTitle: {
        margin: spacing(1.25, 0, 2.5),
        width: '100%',
        textAlign: 'center',
        color: palette.grey[600],
    },
    AccordeonOrder: {
        [breakpoints.up('md')]: {
            order: 2,
        },
    },
}));

export default useStyles;
