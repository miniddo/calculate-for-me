interface Props {
  variant?: 'primary' | 'secondary';
  width?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const Button = ({
  variant = 'primary',
  width,
  disabled = false,
  children = '',
  onClick,
}: Props) => {
  const textColor = variant === 'primary' ? 'default' : 'alternative';
  const className = `bg-${variant} rounded-lg px-5 py-2.5 text-sm font-semibold h-[40px] text-${textColor} ${
    width ? `w-[${width}]` : ''
  }`;

  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
