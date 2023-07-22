import React from 'react';

import './error.css';


export default function Error({ error }) {

    console.log(`<Error /> rendered! error=${error}`);

    

    return (
        <div className='error'>
            There was an error: {error}
            <br />
            Please refresh the page or contact support.
        </div>
    )
};
