import React from 'react';
import { Grid, Typography, TypographyProps } from '@material-ui/core';

import { GridProps } from '../../interfaces/MaterialUI';

import useStyles from './SectionTitleStyles';

export interface SectionTitleProps extends GridProps, TypographyProps {}

const SectionTitle: React.FC<SectionTitleProps> = ({
    children,
    xs,
    sm,
    md,
    lg,
    xl,
    ...typographyProps
}) => {
    return (
        <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            <Typography {...typographyProps}>{children}</Typography>
        </Grid>
    );
};

export default SectionTitle;
