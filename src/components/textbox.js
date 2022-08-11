import React from 'react';
import CopyText from './copytext';
import PropTypes from 'prop-types';

TextBox.propTypes = {
    list: PropTypes.array.isRequired
}


function TextBox({ list }) {
    return (
        <>
            { 
                list.map((item, index) => (<CopyText key={ index } title={ item.title } content={ item.content } />))
            }
        </>
    )
}

export default TextBox;