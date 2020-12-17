type GridItem = boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;

export interface GridProps {
    xs?: GridItem;
    sm?: GridItem;
    md?: GridItem;
    lg?: GridItem;
    xl?: GridItem;
}
