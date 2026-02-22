interface ButtonProps {
  label: string;
}
const Button = ({ label }: ButtonProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <a
        href="https://github.com/satnaing/astro-boilerplate"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
      >
        {label}
      </a>
    </div>
  )
};

export default Button;