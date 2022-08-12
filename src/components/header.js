import '../assets/components/header'
import { Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

Header.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string.isRequired
}

function Header({ color='primary', title }) {
    function handleBackClick() {
        window.history.back();
    }

    return (
        <>
            <div className='div--header'>
                <div className='header--inner'>
                    <ArrowBackIcon onClick={ handleBackClick } />
                    <Typography color={ color }>
                        <span className='header--title'>{ title }</span>
                    </Typography>
                    <MenuIcon />
                </div>
            </div>
        </>
    )
}

export default Header;