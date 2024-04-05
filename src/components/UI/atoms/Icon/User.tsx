interface Props {
  size?: number;
  color?: string;
}

const UserIcon = ({ size = 3, color = 'currentColor' }: Props) => {
  const sizeDic: { [key: number]: string } = {
    1: 'h-1 w-1',
    2: 'h-2 w-2',
    3: 'h-3 w-3',
    4: 'h-4 w-4',
    5: 'h-5 w-5',
    6: 'h-6 w-6',
    7: 'h-7 w-7',
  };

  return (
    <svg
      className={`${sizeDic[size]} text-gray-800`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};

export default UserIcon;
