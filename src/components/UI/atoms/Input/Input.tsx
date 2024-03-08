interface Props {
  className?: string;
  type?: 'text' | 'number';
  defaultValue?: string | number;
  value?: string | number;
  id?: string;
  name?: string;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  className = '',
  type = 'text',
  defaultValue = '',
  value = '',
  id = '',
  name = '',
  readOnly = false,
  onChange,
}: Props) => {
  if (value) {
    return (
      <input
        className={className}
        type={type}
        id={id}
        name={name}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
      />
    );
  } else {
    return (
      <input
        className={className}
        type={type}
        id={id}
        name={name}
        defaultValue={defaultValue}
        readOnly={readOnly}
        onChange={onChange}
      />
    );
  }
};

export default Input;
