import React from 'react';

type AnchorProps = {
  label?: string;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function Anchor(props: AnchorProps) {
  const { label, href, target = '_blank', rel = 'noopener noreferrer', className, children } = props;
  return (
    <a href={href} target={target} rel={rel} className={className}>
      {children ?? label ?? href}
    </a>
  );
}


