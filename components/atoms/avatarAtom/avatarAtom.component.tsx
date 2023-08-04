import React from 'react'

interface AvatarProps {
  imageUrl: string
  altText: string
}

const AvatarAtom: React.FC<AvatarProps> = ({ imageUrl, altText }) => {
  return (
    <div className="overflow-hidden">
      <img
        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        src={imageUrl}
        alt={altText}
      />
    </div>
  )
}

export default AvatarAtom
