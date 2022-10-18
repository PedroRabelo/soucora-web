import { ButtonHTMLAttributes } from "react"
import clsx from 'clsx'
import Link from "next/link"

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-md py-2 px-4 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-md py-2 px-4 text-md focus:outline-none',
}

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    primary: 'bg-primary text-white hover:text-slate-100 hover:bg-pink-500 active:bg-pink-800 active:text-pink-100 focus-visible:outline-pink-600',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
    primary: 'bg-primary text-white hover:text-slate-100 hover:bg-pink-500 active:bg-pink-800 active:text-pink-100 focus-visible:outline-pink-600',
  },
}

type Props = {
  variant?: 'solid' | 'outline';
  color?: 'slate' | 'white' | 'primary';
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ variant = 'solid', color = 'slate', className, ...props }: Props) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return (
    <button className={className} {...props} />
  )
}