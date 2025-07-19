import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, style }) => {
  return (
    <button className={`px-4 py-2 text-white bg-blue-500 ${style}`}>
      {title}
    </button>
  );
};

export default Button;
