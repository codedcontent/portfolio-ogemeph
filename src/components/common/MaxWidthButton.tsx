
type Props = {
  onClick: () => void;
  text: string;
  disabled?: boolean;
};

const MaxWidthButton = ({text, onClick, disabled}: Props) => {
  return (
    <button className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-2.5 px-4 rounded uppercase">
      {text}
    </button>
  );
};

export default MaxWidthButton;
