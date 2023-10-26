type Props = {
  value: string;
  type: string;
  placeholder: string;
  handleChange: (type: string, value: string) => void;
};

const TextField = ({ handleChange, placeholder, type, value }: Props) => {
  return (
    <input
      type="text"
      className="border-2 border-primary py-3 px-4 w-full outline-none rounded-lg text-sm placeholder:font-light"
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(type, e.target.value)}
    />
  );
};

export default TextField;
