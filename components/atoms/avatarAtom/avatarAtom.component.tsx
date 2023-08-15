import React from 'react'

interface AvatarProps {
  imageUrl: string
  altText: string
}

const AvatarAtom: React.FC<AvatarProps> = ({ imageUrl, altText }) => {
  return (
    <div className="overflow-hidden">
      <img
        className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
        src={imageUrl}
        alt={altText}
      />
    </div>
  )
}

export default AvatarAtom
