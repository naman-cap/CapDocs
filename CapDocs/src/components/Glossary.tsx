import React, {ReactNode} from 'react';

type GlossaryProps = {
  children?: ReactNode;
  title?: string;
  className?: string;
};

export default function Glossary({children, title, className}: GlossaryProps) {
  return (
    <abbr title={title} className={className}>
      {children}
    </abbr>
  );
}


