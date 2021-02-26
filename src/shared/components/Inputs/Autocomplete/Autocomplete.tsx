import React, { useState, useEffect } from 'react';
import { Field } from 'formik';
import {
    Autocomplete as MUIAutocomplete,
    AutocompleteRenderInputParams,
} from 'formik-material-ui-lab';
import { Grid, TextField, GridProps } from '@material-ui/core';

import Label, { LabelProps } from '../Label/Label';

import useStyles from './AutocompleteStyles';

export interface AutocompleteProps extends LabelProps {
    name: string;
    conditionalOptions: any;
    error: string | undefined;
    touched: boolean | undefined;
    labelProps?: LabelProps;
    autocompleteGrid?: GridProps;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
    autocompleteGrid = { xs: 12, md: 5 },
    id,
    label,
    name,
    labelProps,
    conditionalOptions,
    error,
    touched,
}) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([] as { title: string }[]);

    const newLabelProps = { id, label, error, touched, ...labelProps };

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
            <Label {...newLabelProps} />
            <Grid item {...autocompleteGrid}>
                <Field
                    id={name}
                    name={name}
                    component={MUIAutocomplete}
                    options={options}
                    getOptionLabel={(option: { label: string }) => {
                        if (!option.label) return '';
                        else return option.label;
                    }}
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
                        <TextField
                            {...params}
                            label='Wybierz'
                            variant='outlined'
                            id={name}
                            name={name}
                            error={touched && !!error}
                        />
                    )}
                    className={classes.Autocomplete}
                />
            </Grid>
        </>
    );
};
