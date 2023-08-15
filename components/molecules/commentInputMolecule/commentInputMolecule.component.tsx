import clsx from 'clsx'
import React, { TextareaHTMLAttributes } from 'react'
import AvatarAtom from '@/components/atoms/avatarAtom/avatarAtom.component'
import ButtonAtom from '@/components/atoms/buttonAtom/buttonAtom.component'
import TextareaAtom from '@/components/atoms/textareaAtom/textareaAtom.component'

interface CommentInputProps {
  handleClick: () => void
  avatarUrl?: string
  avatarUser?: string
  textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>
  isUpdateField?: boolean
}

const CommentInputMolecule: React.FC<CommentInputProps> = ({
  avatarUrl,
  avatarUser,
  handleClick,
  textareaProps,
  isUpdateField,
}) => {
  return (
    <div
      className={clsx({
        'flex items-start flex-1 gap-4': !isUpdateField,
        'flex flex-col w-full gap-4 items-end': isUpdateField,
      })}
    >
      {!isUpdateField && (
        <div className="min-w-fit">
          <AvatarAtom
            imageUrl={avatarUrl || ''}
            altText={`user ${avatarUser}`}
          />
        </div>
      )}
      <TextareaAtom {...textareaProps} />
      <ButtonAtom colorType="blue" className="uppercase" onClick={handleClick}>
        {isUpdateField ? 'Update' : 'Send'}
      </ButtonAtom>
    </div>
  )
}

export default CommentInputMolecule
