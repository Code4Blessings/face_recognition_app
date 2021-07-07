import React from 'react';


export default({ name, entries }) => (
    <div>
        <div className='white f3'>
            {`${name}, your current entry count is...`}
        </div>
        <div className='white f1'>
            {entries}
        </div>
    </div>
)