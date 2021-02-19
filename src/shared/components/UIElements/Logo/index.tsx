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
        <h1 className={className}>
            <Link to='/'>
                <img
                    src={logoSrc || defaultLogoSrc}
                    alt={alt || 'Logo firmy'}
                    className={classes.Logo}
                />
            </Link>
        </h1>
    );
};

export default Logo;
