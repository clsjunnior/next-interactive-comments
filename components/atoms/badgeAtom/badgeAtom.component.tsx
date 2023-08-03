import React, { HtmlHTMLAttributes, PropsWithChildren } from 'react'

interface BadgeProps extends HtmlHTMLAttributes<HTMLHtmlElement> {}

const BadgeAtom: React.FC<PropsWithChildren<BadgeProps>> = ({
  children = 'you',
  ...rest
}) => {
  return (
    <span
      className="bg-moderate-blue text-white text-xs font-medium tracking-wide px-2 py-0.5 rounded"
      {...rest}
    >
      {children}
    </span>
  )
}

export default BadgeAtom
