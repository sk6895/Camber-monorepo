import React from 'react';

const Loading = () => {
  return (
    <div className='flex h-[580px] items-center justify-center'>
      <div className='relative h-32 w-32'>
        <div className='absolute inset-0 rounded-full border-8 border-gray-300'></div>
        <div className='absolute inset-0 animate-spin rounded-full border-r-8 border-t-8 border-gray-900'></div>
      </div>
    </div>
  );
};

export default Loading;
