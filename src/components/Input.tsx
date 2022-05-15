import react, { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...rest },
  ref
) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>

      <input
        type="text"
        placeholder="type your name"
        ref={ref}
        {...rest}
      />
    </div>
  );
};

export default forwardRef(Input);
