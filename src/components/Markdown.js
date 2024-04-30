import { useEffect, useState } from 'react'

import Markdown from 'marked-react';


const LoadedMarkdown = ({ contentURL }) => {
    const [markdown, setMarkdown] = useState('');

    async function fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.text();
            setMarkdown(data);
        } catch(error) {
            setMarkdown(null);
            console.error('There has been a problem with your fetch operation: ', error.message);
        }
    }
      

    useEffect(() => {
        fetchData(contentURL);
    });

    return (
        <div className='content'>
        {markdown !== null && <Markdown>
            {markdown}
        </Markdown>}
        {markdown === null && <p>There was an error loading the content.</p>}
        </div>
    );
}

export default LoadedMarkdown;