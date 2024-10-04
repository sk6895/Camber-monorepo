import React from 'react';

const InstagramEmbed = () => {
  return (
    <section className='p-8'>

      <h1 className='text-center text-5xl font-semibold pb-6'>Social <span className='text-red-500'>Media</span></h1>
      
      <div className="relative overflow-hidden h-[580px]">
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div className="elfsight-app-c0a42e55-5338-448d-814c-be079af4f814" data-elfsight-app-lazy></div>
      </div>

    </section>
  );
};

export default InstagramEmbed;
