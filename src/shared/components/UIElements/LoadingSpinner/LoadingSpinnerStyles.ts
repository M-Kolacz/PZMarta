import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ zIndex }) => ({
    backdrop: {
        zIndex: zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default useStyles;
