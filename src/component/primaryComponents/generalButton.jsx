import React from 'react';

export default function GeneralButton ({value}) {
    return (
        <button type="button" className='bg-transparent border border-[#004AAD] hover:bg-[#004AAD] hover:text-white hover:border-none text-[#004AAD] w-[30%]'>{value}</button>
    );
};

