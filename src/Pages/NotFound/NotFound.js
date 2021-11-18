import { Link } from 'react-router-dom';
import React from 'react';


const NotFound = () => {
    return (
        <div className='text-center'>
        <h2 className='text-danger'>This page is not available</h2>
        
        <div className="go-back">
            <Link to='/home'>
                <button className='btn btn-primary'>Go Back Home</button>
            </Link>
        </div>
    </div>
    );
};

export default NotFound;