import React, { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
}

const CardAtom: React.FC<CardProps> = ({ children }) => {
  return <div className="bg-white rounded-lg p-6">{children}</div>
}

export default CardAtom
