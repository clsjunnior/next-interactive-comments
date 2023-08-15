import React from 'react'

import ScoreButtonMolecule from '@/components/molecules/scoreButtonMolecule/scoreButtonMolecule.component'
import CardAtom from '@/components/atoms/cardAtom/cardAtom.component'
import UserLabelMolecule from '@/components/molecules/userLabelMolecule/userLabelMolecule.component'
import ButtonIconMolecule from '@/components/molecules/buttonIconMolecule/buttonIconMolecule.component'

export interface CommentCardOrganismProps {
  comment: {
    username: string
    avatar: string
    createdAt: Date
    commentText: string
  }
  score: {
    counter: number
    handleUpVote: () => void
    handleDownVote: () => void
  }
  reply: {
    handleReply: () => void
  }
}

const CommentCardOrganism: React.FC<CommentCardOrganismProps> = ({
  comment,
  score,
  reply,
}) => {
  const { username, avatar, createdAt, commentText } = comment
  const { counter, handleUpVote, handleDownVote } = score
  const { handleReply } = reply

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
              />
              <ButtonIconMolecule
                onClick={handleReply}
                icon={{ type: 'reply', fill: '#5357B6', width: 14, height: 13 }}
                className="px-0 "
              >
                Reply
              </ButtonIconMolecule>
            </div>
            <p className="font-normal text-sm text-grayish-blue-fonts leading-normal">
              {commentText}
            </p>
          </div>
        </div>
      </CardAtom>
    </div>
  )
}

export default CommentCardOrganism
