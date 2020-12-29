import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { AccordionOptions, AccordionOptions2 } from '../../shared/SSOT/Accordion';
import happyClientSrc from '../../images/jpg/happyClient2.jpg';
import happyClientSrc2 from '../../images/jpg/happyClient.jpg';

import Image from '../../shared/components/Image/Image';
import Accordion from '../../shared/components/Accordion/Accordion';

import useStyles from './AnswersStyles';

export interface AnswersProps {}

const Answers: React.FC<AnswersProps> = () => {
    const classes = useStyles();
    return (
        <Grid container item xs={12} component='main'>
            <Typography variant='h2' className={classes.AnswersTitle}>
                Pytania i odpowiedzi
            </Typography>

            <Accordion accordion={AccordionOptions} xs={12} md={6} />
            <Image xs={12} md={6} imageSrc={happyClientSrc} imageAlt='' role='presentation' />
            <Accordion
                accordion={AccordionOptions2}
                xs={12}
                md={6}
                className={classes.AccordeonOrder}
            />
            <Image xs={12} md={6} imageSrc={happyClientSrc2} imageAlt='' role='presentation' />
        </Grid>
    );
};

export default Answers;
