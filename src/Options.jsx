import { Tab } from '@headlessui/react';
import Avatar from './Avatar';
import { Fragment } from 'react';
import { allOptions, enums } from './constants';

// eslint-disable-next-line react/prop-types
export default function Options({ avatarOptions, setAvatarOptions }) {
  return (
    <Tab.Group as="div" className="mx-auto flex h-full w-full flex-col overflow-hidden rounded-t-3xl bg-white lg:w-[1024px]">
      <Tab.List className="flex gap-2 overflow-auto p-4">
        {Object.keys(allOptions).map((keyTitle) => (
          <Tab as={Fragment} key={keyTitle}>
            {({ selected }) => (
              <button
                className={`${
                  selected ? 'bg-blue-500/[.15] text-blue-500 hover:bg-blue-500/20 active:hover:bg-blue-500/25' : 'text-neutral-500 hover:bg-black/5 active:hover:bg-black/10'
                } whitespace-nowrap rounded-lg px-2 py-1 duration-200`}
              >
                {enums[keyTitle]}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>

      <Tab.Panels className="flex-1 overflow-auto p-4">
        {Object.keys(allOptions).map((keyTitle) => (
          <Tab.Panel key={keyTitle} className="grid grid-cols-[repeat(auto-fill,minmax(96px,1fr))] gap-4">
            {allOptions[keyTitle].map((value, key) => (
              <button key={key} onClick={() => setAvatarOptions((prev) => ({ ...prev, [keyTitle]: [value] }))}>
                <Avatar
                  options={{ ...avatarOptions, [keyTitle]: [value] }}
                  className={`${
                    avatarOptions?.[keyTitle]?.[0] === value ? 'ring-2 ring-offset-2' : 'hover:ring-2 hover:ring-offset-2'
                  } ring-blue-500 ring-offset-white duration-200`}
                />
              </button>
            ))}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
