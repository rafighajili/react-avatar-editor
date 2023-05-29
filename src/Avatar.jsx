import { createAvatar } from '@dicebear/core';
import { bottts } from '@dicebear/collection';
import { useMemo } from 'react';

// eslint-disable-next-line react/prop-types
export default function Avatar({ className = '', options = {} }) {
  let filteredOptions = {};
  Object.keys(options).forEach((element) => {
    filteredOptions = { [element]: [options[element]], ...filteredOptions };
  });

  const avatar = useMemo(() => {
    return createAvatar(bottts, {
      size: 512,
      topProbability: 100,
      mouthProbability: 100,
      sidesProbability: 100,
      textureProbability: 100,
      ...filteredOptions,
    }).toDataUriSync();
  }, [options]);

  return <img src={avatar} alt="Avatar" className={`block aspect-square rounded-2xl ${className}`} />;
}
