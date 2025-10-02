import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

export function ImageWithFallback({ src, alt, fallbackSrc, ...props }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasErrored, setHasErrored] = useState(false);

  const handleError = () => {
    if (!hasErrored) {
      setHasErrored(true);
      if (fallbackSrc) {
        setImgSrc(fallbackSrc);
      } else {
        // Default fallback - a simple colored div
        return (
          <div 
            className={`bg-gray-200 flex items-center justify-center ${props.className || ''}`}
            style={{ minWidth: '50px', minHeight: '50px' }}
          >
            <span className="text-gray-500 text-xs">Image</span>
          </div>
        );
      }
    }
  };

  if (hasErrored && !fallbackSrc) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${props.className || ''}`}
        style={{ minWidth: '50px', minHeight: '50px' }}
      >
        <span className="text-gray-500 text-xs">Image</span>
      </div>
    );
  }

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  );
}
