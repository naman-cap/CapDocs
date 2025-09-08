import React from 'react';

type TableProps = React.HTMLAttributes<HTMLTableElement> & {
  align?: Array<'left' | 'center' | 'right' | null | undefined>;
  children?: React.ReactNode;
};

export default function Table({ align, children, ...rest }: TableProps) {
  // Provide column alignment via CSS variables that can be used in CSS if desired
  const style: React.CSSProperties = {};
  if (Array.isArray(align)) {
    (style as any)['--table-align'] = align
      .map((a) => (a === 'left' || a === 'center' || a === 'right' ? a : ''))
      .join(' ');
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table {...rest} style={{ ...style, width: '100%', borderCollapse: 'collapse' }}>
        {children}
      </table>
    </div>
  );
}


