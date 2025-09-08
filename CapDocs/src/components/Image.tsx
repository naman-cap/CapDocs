import React, {ReactNode, CSSProperties} from 'react';

type ImageProps = {
  src: string;
  alt?: string;
  title?: string;
  align?: 'left' | 'center' | 'right';
  width?: string | number;
  border?: boolean;
  className?: string;
  children?: ReactNode; // caption
};

export default function Image(props: ImageProps) {
  const {src, alt, title, align, width, border, className, children} = props;

  const containerStyle: CSSProperties = {
    textAlign: align === 'center' ? 'center' : align === 'right' ? 'right' : undefined,
    margin: align === 'center' ? '1rem auto' : '1rem 0',
  };

  const computedWidth = typeof width === 'number' ? `${width}px` : (width || undefined);
  const trimmedWidth = typeof computedWidth === 'string' ? computedWidth.trim() : computedWidth;

  const imgStyle: CSSProperties = {
    maxWidth: '100%',
    height: 'auto',
    width: trimmedWidth,
    display: align ? 'inline-block' : undefined,
    border: border ? '1px solid #e5e7eb' : undefined,
    borderRadius: border ? 6 : undefined,
  };

  return (
    <figure style={containerStyle} className={className}>
      <img src={src} alt={alt} title={title} style={imgStyle} />
      {children ? (
        <figcaption style={{color: '#6b7280', fontSize: 14, marginTop: 8}}>
          {children}
        </figcaption>
      ) : null}
    </figure>
  );
}



