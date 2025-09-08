import React from 'react';

type HTMLBlockProps = {
  children: string | { toString(): string };
};

export default function HTMLBlock({ children }: HTMLBlockProps) {
  const html = typeof children === 'string' ? children : children?.toString?.() ?? '';
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}


