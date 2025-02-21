import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  registerProps: UseFormRegisterReturn;
}

export default function TextInput(props: Props) {
  return (
    <div className="grid">
      <input
        className="px-2 py-1 border rounded mt-2 bg-slate-50"
        type="text"
        placeholder={props.placeholder}
        {...props.registerProps}
      />
      {props.helperText && (
        <p className={props.error ? "text-red-600" : ""}>{props.helperText}</p>
      )}
    </div>
  );
}
