import Avatar from './Avatar';

// eslint-disable-next-line react/prop-types
export default function Preview({ avatarOptions }) {
  return (
    <div className="grid place-items-center">
      <Avatar className="w-64" options={avatarOptions} />
    </div>
  );
}
