import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '../Button/Button';
import useStyles from './NavigationItemStyles';

export interface NavigationItemProps {
    title: string;
    description: string;
    documents: string[];
    link: string;
    icon: SvgIconProps;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
    title,
    description,
    documents,
    icon,
    link,
}) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={4}>
            <Accordion className={classes.Container}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={classes.ExpandIcon} />}
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

                    <Button
                        color='secondary'
                        variant='contained'
                        className={classes.Button}
                        component={Link}
                        to={link}
                    >
                        Otwórz formularz
                    </Button>
                </AccordionDetails>
            </Accordion>
        </Grid>
    );
};

export default NavigationItem;
