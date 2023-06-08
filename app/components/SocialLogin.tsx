import Image from 'next/image';
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  logoUrl: string;
  text: string;
}

const SocialLogin = ({ logoUrl, text, ...props }: Props) => {
  return (
    <button
      className='flex items-center gap-2.5 rounded-[10px] bg-white py-2 px-5 hover:opacity-70 active:opacity-100'
      {...props}
    >
      <Image src={logoUrl} alt='google' width={'14'} height={'14'} />
      <p className='text-xs font-normal text-[#858585]'>{text}</p>
    </button>
  );
};

export default SocialLogin;
