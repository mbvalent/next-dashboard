import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import React from 'react';

interface Props extends LinkProps {
  className?: string;
  href: string;
  children: React.ReactNode;
}

const CustomLink = React.forwardRef<HTMLAnchorElement, Props>(
  ({ className, children, href, ...props }, ref) => {
    return (
      <Link
        href={href}
        className={cn('text-link font-lato hover:opacity-80 active:opacity-100', className)}
        {...props}
        ref={ref}
      >
        {children}
      </Link>
    );
  }
);

CustomLink.displayName = 'CustomLink';

export default CustomLink;
