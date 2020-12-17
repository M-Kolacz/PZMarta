import React from 'react';
import { Grid, GridProps } from '@material-ui/core';

import defaultLogoSrc from '../../../images/svg/logo2.svg';

export interface LogoProps extends GridProps {
    logoClassName?: string;
    logoSrc?: string;
    alt?: string;
}

const Logo: React.FC<LogoProps> = ({ logoSrc, logoClassName, alt, ...containerProps }) => {
    return (
        <Grid {...containerProps} container item>
            <img
                src={logoSrc || defaultLogoSrc}
                alt={alt || 'Company logo'}
                className={logoClassName}
            />
        </Grid>
    );
};

export default Logo;
