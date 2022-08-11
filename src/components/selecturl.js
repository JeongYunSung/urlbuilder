import React from 'react';
import Input from '../components/input';
import PropTypes from 'prop-types';

SelectUrl.PropTypes = {
    setValue: PropTypes.func.isRequired
}

function SelectUrl({ setValue }) {
    const [text, setText] = React.useState('');

    

    return (
        <>
            <Input defaultValue={ text } setValue={ setText }/>
        </>
    )
}

export default SelectUrl;