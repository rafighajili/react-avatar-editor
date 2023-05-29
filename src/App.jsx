import { useState } from 'react';
import Options from './Options';
import Preview from './Preview';
import { initialOptions } from './constants';

export default function App() {
  const [avatarOptions, setAvatarOptions] = useState(initialOptions);

  return (
    <div className="grid h-screen w-screen grid-rows-2 bg-blue-300">
      <Preview {...{ avatarOptions }} />
      <Options {...{ avatarOptions, setAvatarOptions }} />
    </div>
  );
}
