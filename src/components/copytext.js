import '../assets/components/copytext';
import React, { useRef } from 'react';
import { PropTypes } from 'prop-types';
import useCopyToClipboard from '../hooks/clipboard';
import Typography from '@mui/material/Typography';
import ContentPasteTwoToneIcon from '@mui/icons-material/ContentPasteTwoTone';

CopyText.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

function CopyText({ title, content }) {
    const [isCopied, setCopied] = useCopyToClipboard();
    const copy = useRef()

    function handleClick(e) {
        e.preventDefault();
        if(isCopied) {
            return;
        }
        setCopied(content);
    }

    function handleAnimationEnd(e) {
        e.preventDefault();
        setTimeout(() => {
            setCopied(false);
        }, 300);
    }

    return (
        <>
            <div className='div--copytitle'>
                <Typography color='#6c7073' variant='h5'>
                    { title }
                </Typography>
            </div>
            <div className='div--copytext'>
                <ContentPasteTwoToneIcon 
                    fontSize='medium'
                    color='disabled'
                    className={ isCopied ? 'icon--animation' : 'icon--normal' }
                    ref={ copy }
                    onClick={ handleClick }
                    onAnimationEnd={ handleAnimationEnd } />
                <Typography color='#d4ab83'>
                    { content }
                </Typography>
            </div>
        </>
    )
}

export default CopyText;