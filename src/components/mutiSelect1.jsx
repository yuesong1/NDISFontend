import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 50,
        },
    },
};

const names = [
    'Chemical',
    'Physical',
    'Mechanical',
    'Environmental',
    'Seclusion'
];

function getStyles(name, typeName, theme) {
    return {
        fontWeight:
            typeName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelect1({valueChange}) {
    const theme = useTheme();
    const [typeName, setTypeName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setTypeName(// On autofill we get a stringified value.
            // typeof value === 'string' ? value.split(',') : value,
            value
        );
        valueChange(event, typeName, 'multiSelect1');
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: '40%'}}>
                <InputLabel id="demo-multiple-name-label">Restrictive intervention </InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={typeName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Restrictive intervention " />}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, typeName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

MultipleSelect1.propTypes = {
    valueChange: PropTypes.func,
}
