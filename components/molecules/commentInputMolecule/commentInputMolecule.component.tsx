import AvatarAtom from '@/components/atoms/avatarAtom/avatarAtom.component'
import ButtonAtom from '@/components/atoms/buttonAtom/buttonAtom.component'
import TextareaAtom from '@/components/atoms/textareaAtom/textareaAtom.component'
import React, { TextareaHTMLAttributes } from 'react'

interface CommentInputProps {
  avatarUrl: string
  avatarUser: string
  handleClick: () => void
  textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>
}

const CommentInputMolecule: React.FC<CommentInputProps> = ({
  avatarUrl,
  avatarUser,
  handleClick,
  textareaProps,
}) => {
  return (
    <div className="flex items-start flex-1 gap-4">
      <div className="min-w-fit">
        <AvatarAtom imageUrl={avatarUrl} altText={`user ${avatarUser}`} />
      </div>
      <TextareaAtom {...textareaProps} />
      <ButtonAtom colorType="blue" className="uppercase" onClick={handleClick}>
        Send
      </ButtonAtom>
    </div>
  )
}

export default CommentInputMolecule
