import React, { useState } from 'react'

import ScoreButtonMolecule from '@/components/molecules/scoreButtonMolecule/scoreButtonMolecule.component'
import CardAtom from '@/components/atoms/cardAtom/cardAtom.component'
import UserLabelMolecule from '@/components/molecules/userLabelMolecule/userLabelMolecule.component'
import ButtonIconMolecule from '@/components/molecules/buttonIconMolecule/buttonIconMolecule.component'
import CommentInputMolecule from '@/components/molecules/commentInputMolecule/commentInputMolecule.component'

export interface CommentCardOrganismProps {
  comment: {
    username: string
    avatar: string
    createdAt: Date
    commentText: string
    isCurrentUser?: boolean
  }
  score: {
    counter: number
    handleUpVote: () => void
    handleDownVote: () => void
  }
  reply: {
    handleReply: () => void
  }
  deleteComment?: {
    handleDeleteCallback: () => void
  }
  editComment?: {
    handleEditCallback: () => void
  }
}

const CommentCardOrganism: React.FC<CommentCardOrganismProps> = ({
  comment,
  score,
  reply,
  editComment = {
    handleEditCallback: undefined,
  },
  deleteComment = {
    handleDeleteCallback: undefined,
  },
}) => {
  const { username, avatar, createdAt, isCurrentUser, commentText } = comment
  const { counter, handleUpVote, handleDownVote } = score
  const { handleReply } = reply
  const { handleDeleteCallback } = deleteComment
  const { handleEditCallback } = editComment

  const [isEdit, setIsEdit] = useState(false)
  const [updateInput, setUpdateInput] = useState(commentText)

  const handleIsEdit = () => {
    setIsEdit(true)
  }

  const handleUpdate = () => {
    if (!handleEditCallback) return
    setIsEdit(false)
    handleEditCallback()
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setUpdateInput(value)
  }

  return (
    <div className="flex p-2 w-full">
      <CardAtom>
        <div className="flex gap-6">
          <ScoreButtonMolecule
            totalCount={counter}
            handleUpVote={handleUpVote}
            handleDownVote={handleDownVote}
          />
          <div className="flex flex-col flex-1 items-start gap-4">
            <div className="flex w-full justify-between">
              <UserLabelMolecule
                username={username}
                imageUrl={avatar}
                createdAt={createdAt}
                isCurrentUser={isCurrentUser}
              />
              {isCurrentUser && (
                <div className="flex gap-5">
                  {handleDeleteCallback && (
                    <ButtonIconMolecule
                      onClick={handleDeleteCallback}
                      disabled={isEdit}
                      colorType="danger"
                      icon={{
                        type: 'delete',
                        fill: '#ED6368',
                        width: 14,
                        height: 14,
                      }}
                      className="pr-0 pl-0"
                    >
                      Delete
                    </ButtonIconMolecule>
                  )}
                  {handleEditCallback && (
                    <ButtonIconMolecule
                      onClick={handleIsEdit}
                      disabled={isEdit}
                      icon={{
                        type: 'edit',
                        fill: '#5357B6',
                        width: 14,
                        height: 14,
                      }}
                      className="pr-0 pl-0"
                    >
                      Edit
                    </ButtonIconMolecule>
                  )}
                </div>
              )}

              {!isCurrentUser && (
                <ButtonIconMolecule
                  onClick={handleReply}
                  icon={{
                    type: 'reply',
                    fill: '#5357B6',
                    width: 14,
                    height: 13,
                  }}
                  className="pr-0 pl-0"
                >
                  Reply
                </ButtonIconMolecule>
              )}
            </div>
            {isEdit ? (
              <CommentInputMolecule
                handleClick={handleUpdate}
                textareaProps={{
                  value: updateInput,
                  onChange: handleChangeInput,
                }}
                isUpdateField
              />
            ) : (
              <p className="font-normal text-sm text-grayish-blue-fonts leading-normal">
                {commentText}
              </p>
            )}
          </div>
        </div>
      </CardAtom>
    </div>
  )
}

export default CommentCardOrganism
