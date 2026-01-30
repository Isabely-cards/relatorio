import type { ButtonHTMLAttributes } from "react";

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function AuthButton({ children, ...props }: AuthButtonProps) {
  return (
    <button
      {...props}
      className={`
        btn-auth
        disabled:opacity-60
        disabled:cursor-not-allowed
      `}
    >
      {children}
    </button>
  );
}