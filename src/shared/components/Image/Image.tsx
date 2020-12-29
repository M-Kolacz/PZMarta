import React from 'react';
import { Grid, GridProps } from '@material-ui/core';

import useStyles from './ImageStyles';

export interface ImageProps extends GridProps {
    imageSrc: string;
    imageAlt?: string;
    imageClass?: string;
    role?: string;
}

const Image: React.FC<ImageProps> = ({ imageSrc, imageAlt, imageClass, role, ...gridProps }) => {
    const classes = useStyles();
    return (
        <Grid {...gridProps} item>
            <img
                src={imageSrc}
                alt={imageAlt || ''}
                className={`${imageClass || ''} ${classes.Image}`}
                role={role || ''}
            />
        </Grid>
    );
};

export default Image;
