import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography'
import { cyan, lightBlue }from '@mui/material/colors';

Text.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

function Text({ title, content }) {
    const [text, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'title': {
                return { ...state, title: action.payload }
            }
            case 'content': {
                return { ...state, content: action.payload }
            }
        }
    }, { title: 'Title', content: 'Content' });

    useEffect(() => {
        dispatch({ type: 'title', payload: title });
        dispatch({ type: 'content', payload: content });
    }, [ title, content ]);

    return (
        <>
            <Typography variant="h4" color={ lightBlue[200] }>
                { text.title }
            </Typography>
            <Typography variant="span" color={ cyan[300] }>
                { text.content }
            </Typography>
        </>
    );
}

export default Text;