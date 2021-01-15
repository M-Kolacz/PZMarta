import React from 'react';
import { Field } from 'formik';
import {
    Autocomplete as MUIAutocomplete,
    AutocompleteRenderInputParams,
} from 'formik-material-ui-lab';
import { Grid, TextField } from '@material-ui/core';

import { GridProps } from '../../../interfaces/MaterialUI';
import Label, { LabelProps } from '../Label/Label';

export interface AutocompleteProps extends LabelProps, GridProps {
    name: string;
    options: { title: string }[];
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
    xs,
    sm,
    md,
    lg,
    xl,
    id,
    label,
    name,
    options,
}) => {
    return (
        <>
            <Label label={label} id={id} />
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                <Field
                    name={name}
                    component={MUIAutocomplete}
                    options={options}
                    getOptionLabel={(option: { title: string }) => {
                        if (!option.title) return '';
                        else return option.title;
                    }}
                    style={{ width: '100%' }}
                    renderInput={(params: AutocompleteRenderInputParams) => (
                        <TextField {...params} label='Wybierz' variant='outlined' />
                    )}
                />
            </Grid>
        </>
    );
};
