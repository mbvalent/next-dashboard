import * as React from 'react';

import { cn } from '@/lib/utils';
import { Lato } from 'next/font/google';

const lato = Lato({ subsets: ['latin'], weight: '400' });

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex font-lato caret-[#999999] h-10 w-full rounded-[10px] bg-input px-[15px] py-2.5 text-sm placeholder:text-placeholder focus-visible:outline-none focus:bg-input-focus hover:bg-input-hover disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
