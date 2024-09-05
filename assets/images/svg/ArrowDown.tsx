import React from 'react';

const ArrowDown = ({ dark }) => {
    return (
        <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 2L8 10L0 2L2 0L8 6L14 0L16 2Z"
                fill={dark ? 'white' : 'black'}
            />
        </svg>
    );
};

export default ArrowDown;
