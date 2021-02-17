import React from 'react';
import { Grid, GridProps } from '@material-ui/core';

import useStyles from './ImageStyles';

export interface ImageProps {
    imageGrid?: GridProps;
    image: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
}

export const Image: React.FC<ImageProps> = ({ imageGrid = { xs: 12, md: 6 }, image }) => {
    const classes = useStyles();
    return (
        <Grid item {...imageGrid}>
            <img className={classes.Image} alt={image.alt ?? ''} {...image} />
        </Grid>
    );
};

export default Image;
