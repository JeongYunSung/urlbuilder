import '../assets/components/selecturl';
import React from 'react';
import Input from '../components/input';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import PropTypes from 'prop-types';

SelectUrl.propTypes = {
    title: PropTypes.string.isRequired,
    hint: PropTypes.string,
    list: PropTypes.array.isRequired,
    setValue: PropTypes.func.isRequired
}

function SelectUrl({ title, hint='', list, setValue }) {
    const [text, setText] = React.useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleValue(value) {
        setValue(text.replace('{url}', value));
    }

    return (
        <>
            <div className='div--selecturl'>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id='select--label'>{ title }</InputLabel>
                    <Select labelId='select--label' value={ text } onChange={ handleChange }>
                        {
                            list.map((item, index) => (
                                <MenuItem key={ index } value={ item.value }>
                                    { item.content }
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <Input hint={ hint } setValue={ handleValue }/>
            </div>
        </>
    )
}

export default SelectUrl;