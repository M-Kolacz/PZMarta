import React from 'react';
import {
    Grid,
    Typography,
    Button,
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './NavigationItemStyles';

export interface NavigationItemProps {
    title: string;
    description: string;
    documents: string[];
    icon: SvgIconProps;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ title, description, documents, icon }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={4}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label='Expand'
                    aria-controls='additional-actions1-content'
                    id='additional-actions1-header'
                >
                    <Grid className={classes.SummaryContainer}>
                        <Grid className={classes.SummaryIcon}>{icon}</Grid>

                        <Grid>
                            <Typography variant='h5'>{title}</Typography>
                            <Typography variant='body1'>{description}</Typography>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails className={classes.DetailsContainer}>
                    <Typography color='textSecondary'>Przygotuj</Typography>
                    <ul>
                        {documents.map((document, index) => (
                            <li key={index}>{document}</li>
                        ))}
                    </ul>

                    <Button color='secondary' variant='contained' className={classes.Button}>
                        Otwórz formularz
                    </Button>
                </AccordionDetails>
            </Accordion>
        </Grid>
    );
};

export default NavigationItem;
