import { clsx } from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  colorType?: 'blue' | 'danger' | 'grayish'
  isLink?: boolean
}

const ButtonAtom: React.FC<ButtonProps> = ({
  colorType = 'blue',
  isLink = false,
  children,
  ...rest
}) => {
  const btnClass = clsx(
    'hover:opacity-80 transition-opacity py-2 px-4 rounded flex items-center gap-2 font-medium leading-normal',
    isLink
      ? {
          'bg-transparent': isLink,
          'text-moderate-blue': colorType === 'blue',
          'text-soft-red': colorType === 'danger',
          'text-grayish-blue': colorType === 'grayish',
        }
      : {
          'text-white': true,
          'bg-moderate-blue': colorType === 'blue',
          'bg-soft-red': colorType === 'danger',
          'bg-grayish-blue': colorType === 'grayish',
        },
    rest.className
  )

  return (
    <button className={btnClass} data-testid="buttonAtom" {...rest}>
      {children}
    </button>
  )
}

export default ButtonAtom
