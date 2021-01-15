import React, { useState, useEffect } from 'react';
import { Field } from 'formik';
import {
    Autocomplete as MUIAutocomplete,
    AutocompleteRenderInputParams,
} from 'formik-material-ui-lab';
import { Grid, TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { GridProps } from '../../../interfaces/MaterialUI';
import Label, { LabelProps } from '../Label/Label';

export interface AutocompleteDynamicProps extends LabelProps, GridProps {
    name: string;
    conditionalOptions: any;
}

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

export const AutocompleteDynamic: React.FC<AutocompleteDynamicProps> = ({
    xs,
    sm,
    md,
    lg,
    xl,
    id,
    label,
    name,
    conditionalOptions,
}) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([] as { title: string }[]);
    const loading = open && options.length === 0;

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        const result = conditionalOptions();

        if (active) {
            setOptions(result);
        }

        return () => {
            active = false;
        };
    }, [loading, conditionalOptions]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <>
            <Label label={label} id={id} />
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                <Field
                    name={name}
                    component={MUIAutocomplete}
                    options={options}
                    getOptionLabel={(option: { label: string }) => {
                        if (!option.label) return '';
                        else return option.label;
                    }}
                    style={{ width: '100%' }}
                    open={open}
                    onOpen={() => {
                        setOpen(true);
                    }}
                    onClose={() => {
                        setOpen(false);
                    }}
                    getOptionSelected={(option: any, value: any) => option.name === value.name}
                    loading={loading}
                    renderInput={(params: AutocompleteRenderInputParams) => (
                        <TextField {...params} label='Wybierz' variant='outlined' />
                    )}
                />
            </Grid>
        </>
    );
};
