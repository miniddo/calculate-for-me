interface Props {
  size?: number;
  color?: string;
}

const MinusIcon = ({ size = 3, color = 'currentColor' }: Props) => {
  const sizeDic: { [key: number]: string } = {
    1: 'h-1 w-1',
    2: 'h-2 w-2',
    3: 'h-3 w-3',
    4: 'h-4 w-4',
    5: 'h-5 w-5',
  };

  return (
    <svg
      className={sizeDic[size]}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 2"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1h16"
      />
    </svg>
  );
};

export default MinusIcon;
