import { createAvatar } from '@dicebear/core';
import { bottts } from '@dicebear/collection';
import { useMemo } from 'react';

// eslint-disable-next-line react/prop-types
export default function Avatar({ className = '', options = {} }) {
  const avatar = useMemo(() => {
    return createAvatar(bottts, {
      size: 512,
      ...options,
    }).toDataUriSync();
  }, [options]);

  return <img src={avatar} alt="Avatar" className={`block aspect-square rounded-2xl ${className}`} />;
}
