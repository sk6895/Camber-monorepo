import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[580px]">
      <div className="relative h-32 w-32">
        <div className="absolute inset-0 rounded-full border-8 border-gray-300"></div>
        <div className="absolute inset-0 rounded-full border-t-8 border-r-8 border-gray-900 animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
