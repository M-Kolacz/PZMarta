import { GridProps as MUIGridProps } from '@material-ui/core';

export interface GridProps extends Pick<MUIGridProps, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {}
