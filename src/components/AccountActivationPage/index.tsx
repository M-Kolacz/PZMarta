import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Button, Grid, Typography } from '@material-ui/core';
import { useParams, Link as RouterLink } from 'react-router-dom';

import { acoountActivationApi } from '../../shared/SSOT/paths/apiPaths';

import { LoadingSpinner, Navigation } from '../../shared/components/UIElements';

export interface AccountActivationPageProps {}

interface ActivationParam {
    token: string;
}

export const AccountActivationPage: React.FC<AccountActivationPageProps> = () => {
    const { token } = useParams<ActivationParam>();

    const sendAccountActivation = async () => {
        const { data } = await axios.post<{ message: string }>(acoountActivationApi, { token });
        return data;
    };

    const accountActivation = useQuery('accountActivation', sendAccountActivation, {
        retry: false,
        refetchOnWindowFocus: false,
    });

    return (
        <>
            <Navigation navigationTitle='Weryfikacja email' />
            <Grid item xs={12} component='main'>
                <Typography variant='h4' color='textPrimary'>
                    Weryfikacja email udała się !
                </Typography>
                <Typography variant='body1' color='textPrimary'>
                    Aby przejść do swojego konta kliknij w poniższy przycisk.
                </Typography>
                <Button component={RouterLink} to='/' variant='contained' color='secondary'>
                    Przejdź do swojego konta
                </Button>
            </Grid>
            <LoadingSpinner open={accountActivation.isLoading} />
        </>
    );
};
