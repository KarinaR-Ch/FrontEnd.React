interface ButtonProps {
  buttonText: string;
  onClick: () => void;
  className?: string;
}

const Button = ({ buttonText, onClick, className = '' }: ButtonProps) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;