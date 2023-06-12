'use client';

import Image from 'next/image';
import React from 'react';

const Options = () => {
  return (
    <div className='inline-flex h-full gap-5'>
      <button>
        <Image src={'/notification_bell_icon.svg'} alt='notifications' width={'18'} height={'20'} />
      </button>
    </div>
  );
};

export default Options;
