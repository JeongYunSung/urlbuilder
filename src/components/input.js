import React from 'react';
import { TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PropTypes from 'prop-types';

Input.propTypes = {
    hint: PropTypes.string,
    setValue: PropTypes.func.isRequired
}

function Input({ hint='', setValue }) {
    const [text, setText] = React.useState('');

    function handleClick() {
        setValue(text);
    }

    function handleChance(e) {
        e.preventDefault();
        setText(e.target.value);
    }

    function handleKeyUp(e) {
        e.preventDefault();
        if(e.keyCode === 13) {
            handleClick(e.target.value);
        }
    }

    return (
        <>
            <TextField placeholder={ hint } variant='standard' value={text} onChange={handleChance} onKeyUp={handleKeyUp} />
            <IconButton variant='text' onClick={handleClick}>
                <SendIcon />
            </IconButton>
        </>
    )
}

export default Input;