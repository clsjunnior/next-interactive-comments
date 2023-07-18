import { clsx } from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  colorType?: 'blue' | 'danger' | 'grayish'
}

const ButtonAtom: React.FC<ButtonProps> = ({
  colorType = 'blue',
  children,
  ...rest
}) => {
  const btnClass = clsx(
    'hover:opacity-80 transition-opacity text-white py-2 px-4 rounded',
    {
      'bg-moderate-blue': colorType === 'blue',
      'bg-soft-red': colorType === 'danger',
      'bg-grayish-blue': colorType === 'grayish',
    }
  )

  return (
    <button className={btnClass} data-testid="buttonAtom" {...rest}>
      {children}
    </button>
  )
}

export default ButtonAtom
