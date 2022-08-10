import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import CopyText from './components/copytext';

ReactDOM.createRoot(document.getElementById('root')).render(<CopyText title="Good" content="Hello" />);