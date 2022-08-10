import { useState } from 'react';

export default function useCopyToClipboard() {
    const [copied, setCopied] = useState(false);

    function handleCopy(text) {
        if(typeof text === 'string' || typeof text === 'number') {
            navigator.clipboard.writeText(text);
            setCopied(true);
        } else {
            console.log('Text is not a string or number');
            setCopied(false);
        }
    }

    return [copied, handleCopy];
}