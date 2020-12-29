import React from 'react';
import { Grid, Typography, Hidden, Box } from '@material-ui/core';

import useStyles from './FooterStyles';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            item
            xs={12}
            className={classes.FooterContainer}
            component='footer'
            justify='space-between'
            alignItems='center'
        >
            <Typography className={classes.FooterCopyright}>
                © 2020 Marta. Wszelkie prawa zastrzeżone.
            </Typography>
            <Box className={classes.RegulationsContainer}>
                <Hidden xsDown>
                    <Typography className={classes.RegulationsPrivacy}>
                        Polityka prywatności
                    </Typography>
                </Hidden>

                <Typography className={classes.RegulationsRules}>Regulamin serwisu</Typography>
            </Box>
        </Grid>
    );
};

export default Footer;
