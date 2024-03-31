import { blue, green, orange, yellow } from "@mui/material/colors";

export interface IAsset {
    color: string;
    name: string;
    description: string;
    amount: string;
    variation: string;
    isIncrement: boolean;
}

export const _assets: IAsset[] = [
    {
        color: green[800],
        name: 'NBST',
        description: 'National Based Solution Token',
        amount: '0.72',
        variation: '9.0',
        isIncrement: true,

    },
    {
        color: green[500],
        name: 'EFT',
        description: 'Energy Effiency Token',
        amount: '0.36',
        variation: '9.15',
        isIncrement: true,

    },
    {
        color: yellow[800],
        name: 'RET',
        description: 'Renewable Energy Token',
        amount: '0.46',
        variation: '0.56',
        isIncrement: false,

    },
    {
        color: blue[500],
        name: 'WET',
        description: 'Water Token',
        amount: '0.48',
        variation: '1.48',
        isIncrement: false,

    },
    {
        color: orange[800],
        name: 'WPCT',
        description: 'Waste Management ',
        amount: '1.20',
        variation: '11.01',
        isIncrement: true,

    },
]