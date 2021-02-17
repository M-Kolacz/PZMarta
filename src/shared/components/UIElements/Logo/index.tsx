import React from 'react';
import { Link } from 'react-router-dom';

import defaultLogoSrc from '../../../../images/svg/logo.svg';

import useStyles from './LogoStyles';

export interface LogoProps {
    className?: string;
    logoSrc?: string;
    alt?: string;
}

export const Logo: React.FC<LogoProps> = ({ logoSrc, className, alt }) => {
    const classes = useStyles();
    return (
        <h1 className={classes.LogoContainer}>
            <Link to='/'>
                <img
                    src={logoSrc || defaultLogoSrc}
                    alt={alt || 'Company logo'}
                    className={className}
                />
            </Link>
        </h1>
    );
};

export default Logo;
