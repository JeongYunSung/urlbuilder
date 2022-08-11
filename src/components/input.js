import React from 'react';
import { TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PropTypes from 'prop-types';

Input.propTypes = {
    defaultValue: PropTypes.string,
    setValue: PropTypes.func.isRequired
}

function Input({ defaultValue='', setValue }) {
    const [text, setText] = React.useState('');

    function handleClick() {
        setValue(defaultValue + text);
    }

    function handleChance(e) {
        setText(e.target.value);
    }

    return (
        <>
            <TextField placeholder='Input URL' variant='standard' value={text} onChange={handleChance} />
            <IconButton variant='text' onClick={handleClick}>
                <SendIcon />
            </IconButton>
        </>
    )
}

export default Input;