import React from 'react';
import Header from '../components/header'
import Input from '../components/input'
import TextBox from '../components/textbox';

const list = [
    {
        title: 'Good',
        content: 'Hello'
    },
    {
        title: 'Good',
        content: 'Hello'
    },
    {
        title: 'Good',
        content: 'Hello'
    },
    {
        title: 'Good',
        content: 'Hello'
    }
]

export default function UrlBuiler() {
    return (
        <>
            <div>
                <Header color='#000000' title='URL Builder' />
                <Input />
                <TextBox className='div--textbox' list = { list } />
            </div>
        </>
    )
}