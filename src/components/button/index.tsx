interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      className="px-4 py-2 bg-primary border border-primary text-white rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
