import React from 'react';
import {
    Grid,
    Accordion as MUIAccordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { GridProps } from '../../interfaces/MaterialUI';

export interface AccordionProps extends GridProps {
    accordion: { title: string; description: string }[];
    className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ accordion, ...containerProps }) => {
    return (
        <Grid item {...containerProps}>
            {accordion.map(({ title, description }) => (
                <MUIAccordion key={title}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant='h3' style={{ fontSize: '16px' }}>
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
