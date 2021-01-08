import React from 'react';
import { Typography } from '@material-ui/core';

import useStyles from './SectionFormStyles';
export interface SectionFormProps {
    title: string;
}

const SectionForm: React.FC<SectionFormProps> = ({ title }) => {
    const classes = useStyles();
    return <Typography className={classes.SectionTitle}>{title}</Typography>;
};

export default SectionForm;
