import React, { useEffect } from 'react';

const InstagramEmbedContent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='relative h-[580px] overflow-hidden'>
      <div
        className='elfsight-app-c0a42e55-5338-448d-814c-be079af4f814'
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default InstagramEmbedContent;
