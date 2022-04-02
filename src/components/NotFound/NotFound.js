import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-8xl font-bold text-center mt-12'>Page Not Found</h1>
            <h4 className='mt-12 text-gray-400 text-4xl text-center'>We couldn't find what you were looking for.</h4>
            <p className='text-center mt-12'>Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</p>
        </div>
    );
};

export default NotFound;