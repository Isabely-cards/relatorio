import { useField } from "formik";
import type { InputHTMLAttributes } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function AuthInput({ label, ...props }: AuthInputProps) {
  const [field, meta] = useField(props.name!);

  const hasError = meta.touched && meta.error;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm text-white/80">
          {label}
        </label>
      )}

      <input
        {...field}
        {...props}
        className={`
          input-auth
          ${hasError ? "border-red-700 focus:ring-red-700 " : ""}
        `}
      />

      {hasError && (
        <span className="text-sm font-bold text-red-700">
          {meta.error}
        </span>
      )}
    </div>
  );
}
