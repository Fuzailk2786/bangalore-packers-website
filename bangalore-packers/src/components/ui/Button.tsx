import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  fullWidth?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}: ButtonProps) {
  
  const baseStyles = 'px-5 py-3 rounded-lg font-bold text-sm tracking-wide transition-all shadow-sm active:scale-[0.98] focus:outline-none focus:ring-2 disabled:opacity-50 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-orange-600 hover:bg-orange-700 text-white focus:ring-orange-500',
    secondary: 'bg-blue-700 hover:bg-blue-800 text-white focus:ring-blue-500',
    accent: 'bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 focus:ring-slate-400'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
