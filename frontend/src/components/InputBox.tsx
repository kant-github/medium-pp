import React from "react";

interface Props {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string,
  type? : string
}

export const InputBox = ({ label, onChange, type, placeHolder }: Props) => {
  return (
    <div className="flex flex-col gap-2 text-black">
      
      <label className="ml-2 font-medium" htmlFor={label}>{label}</label>
      <input
        onChange={onChange}
        placeholder={placeHolder}
        type={type || "text"}
        name={label}
        id={label}
        className="input w-full bg-customLightGray text-black focus:text-black"
      />
    </div>
  );
};
