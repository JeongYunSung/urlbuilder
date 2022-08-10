import React, { useRef } from 'react';
import { PropTypes } from 'prop-types';
import Text from './text';
import useCopyToClipboard from '../hooks/clipboard';
import FileCopyIcon from '@mui/icons-material/FileCopy';

CopyText.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

function CopyText({ title, content }) {
    const [isCopied, setCopied] = useCopyToClipboard();
    const copy = useRef()

    function handleClick() {
        copy.current.animate([
            { transform: 'translate(0, 0);'},
            { transform: 'translate(0, -6px)'},
            { transform: 'translate(0, -3px)'},
            { transform: 'translate(0, -1px)'},
            { transform: 'translate(0, 0px)'}
        ],{
            duration : 300
        });
        setCopied(content);
    }

    return (
        <>
            <FileCopyIcon color={ isCopied ? 'primary' : 'disabled' } ref={ copy } onClick={ handleClick } />
            <Text title = { title } content = { content } />
        </>
    )
}

export default CopyText;