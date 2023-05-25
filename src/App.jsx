import { useState } from 'react';
import Options from './Options';
import Preview from './Preview';

export default function App() {
  const [avatarOptions, setAvatarOptions] = useState({});

  return (
    <div className="grid h-screen w-screen grid-rows-2 bg-blue-300">
      <Preview {...{ avatarOptions }} />
      <Options {...{ avatarOptions, setAvatarOptions }} />
    </div>
  );
}
