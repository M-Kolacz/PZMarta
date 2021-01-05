import React from 'react';
import { Typography } from '@material-ui/core';

import useStyles from './SectionFormStyles';
export interface SectionFormProps {}

const SectionForm: React.FC<SectionFormProps> = () => {
    const classes = useStyles();
    return <Typography className={classes.SectionTitle}>Data zdarzenia</Typography>;
};

export default SectionForm;
