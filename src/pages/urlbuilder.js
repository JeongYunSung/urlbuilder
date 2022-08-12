import '../assets/pages/urlbuilder';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useHost from '../hooks/host';
import Header from '../components/header'
import TextBox from '../components/textbox';
import SelectInput from '../components/selecturl'

const valueList = [
    {
        value: '{host}/gateway/u/{url}',
        content: 'Google'
    },
    {
        value: '{host}/gateway/o/{url}',
        content: 'OneStore'
    },
    {
        value: 'https://event.okcashbag.com/ld/ld.jsp?linkurl=ocbt://com.skmc.okcashbag.home_google/detail/event?url={host}/{url}',
        content: 'Original'
    }
]
const textList = [
    {
        title: 'Local',
        content: ''
    },
    {
        title: 'Dev',
        content: 'http://pri-devevent.okcashbag.com'
    },
    {
        title: 'Alpha',
        content: 'https://pri-a-event.okcashbag.com'
    },
    {
        title: 'Prod',
        content: 'https://event.okcashbag.com'
    }
]

export default function UrlBuiler() {
    const [url, setUrl] = React.useState('');
    const [list, setList] = React.useState(textList);
    const [host, setHost] = useHost();

    useEffect(() => {
        textList[0].content='http://' + host.host + ':' + host.port;


        setList(textList.map(item => {
            return {
                ...item,
                content: url.replace('{host}', item.content) + '.mocb'
            }
        }));

    }, [list.content, host.host, host.port, url]);

    return (
        <>
            <Header color='#000000' title='URL Builder' />
            <div className='div--wrap'>
                <div className='div--selectinput'>
                    <SelectInput title='Type' hint='Input URL' defaultValue={ url } setValue={ setUrl } list={ valueList }/>
                </div>
                <div className='div--textbox'>
                    <Render url={ url } list={ list }/>
                </div>
            </div>
        </>
    )
}

Render.propTypes = {
    url: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
}

function Render({ url, list }) {
    if(url && url.length > 0) {
        return (<TextBox list={ list } />)
    }
    return (<TextBox list={ [] } />)
}