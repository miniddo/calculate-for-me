interface Props {
  type?: 'text' | 'number';
  value?: string | number;
  id?: string;
  name?: string;
  width?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type = 'text',
  value = '',
  id = '',
  name = '',
  width = '200px',
  onChange,
}: Props) => {
  const _width = `w-[${width}]`;

  return (
    <input
      className={`block ${_width} border-b border-secondary bg-transparent text-center text-xl focus:bg-transparent focus:outline-none`}
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
