import React from 'react';
import { Typography } from '@material-ui/core';

import useStyles from './SectionFormStyles';

export interface SectionFormProps {}

const SectionForm: React.FC<SectionFormProps> = ({ children }) => {
    const classes = useStyles();
    return <Typography className={classes.SectionTitle}>{children}</Typography>;
};

export default SectionForm;
