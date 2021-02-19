import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    Grid,
    Accordion as MUIAccordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@material-ui/core';

import { GridProps } from '../../../interfaces/MaterialUI';

import useStyles from './AccordionsStyles';

export interface AccordionProps extends GridProps {
    accordion: { title: string; description: string }[];
    className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ accordion, ...containerProps }) => {
    const classes = useStyles();
    return (
        <Grid item {...containerProps}>
            {accordion.map(({ title, description }) => (
                <MUIAccordion key={title}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className={classes.ExpandIcon} />}
                    >
                        <Typography variant='h6' component='h3'>
                            {title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{description}</Typography>
                    </AccordionDetails>
                </MUIAccordion>
            ))}
        </Grid>
    );
};

export default Accordion;
