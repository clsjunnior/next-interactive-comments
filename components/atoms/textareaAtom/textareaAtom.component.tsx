import React, { TextareaHTMLAttributes } from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextareaAtom: React.FC<TextAreaProps> = ({
  placeholder = 'Add a comment...',
  rows = 4,
  ...rest
}) => {
  return (
    <textarea
      className="border rounded-lg p-4 w-full focus:outline-none border-light-gray focus:border-grayish-blue text-dark-blue transition-colors"
      placeholder={placeholder}
      rows={rows}
      {...rest}
    />
  )
}

export default TextareaAtom
