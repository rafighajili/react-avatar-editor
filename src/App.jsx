import { useState } from 'react';
import Options from './Options';
import Preview from './Preview';
import { initialOptions } from './constants';

export default function App() {
  const [avatarOptions, setAvatarOptions] = useState(initialOptions);

  return (
    <div
      className="relative z-0 grid h-screen w-screen grid-rows-2 before:absolute before:inset-0 before:-z-10 before:bg-black/10"
      style={{ backgroundColor: `#${avatarOptions.backgroundColor}` }}
    >
      <Preview {...{ avatarOptions }} />
      <Options {...{ avatarOptions, setAvatarOptions }} />
    </div>
  );
}
