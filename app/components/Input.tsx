import React, { forwardRef } from "react";

interface Props {
  label: string;
  name?: string;
  type: "password" | "email" | "text" | "number";
  placeholder: string;
  required?: boolean;
  customStyle?: string;
}

// Define the ref type explicitly as HTMLInputElement
const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, name, type, placeholder, required, customStyle }, ref) => {
    return (
      <div className="flex flex-col w-full">
        <label htmlFor={name}>{label}</label>
        <input
          ref={ref}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          required={required}
          className={`${customStyle} input`}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
