import React from 'react'
import ButtonIconMolecule from '../buttonIconMolecule/buttonIconMolecule.component'

interface ScoreButtonIconProps {
  totalCount: number
  handleUpVote: () => void
  handleDownVote: () => void
}

const ScoreButtonMolecule: React.FC<ScoreButtonIconProps> = ({
  totalCount,
  handleUpVote,
  handleDownVote,
}) => {
  return (
    <div
      className="flex flex-col h-fit w-auto items-center justify-between rounded-lg bg-very-light-gray"
      data-testid="score-button-molecule"
    >
      <ButtonIconMolecule
        customStyle="min-h-[32px] pr-4 pl-4"
        icon={{ type: 'plus', fill: '#C5C6EF', width: 11, height: 14 }}
        onlyIcon
        onClick={handleUpVote}
        title="Up Vote"
      />
      <span className="flex items-center min-h-[32px] font-normal text-base leading-none text-moderate-blue">
        {totalCount}
      </span>
      <ButtonIconMolecule
        customStyle="min-h-[32px] pr-4 pl-4"
        icon={{ type: 'minus', fill: '#C5C6EF', width: 11, height: 3 }}
        onlyIcon
        onClick={handleDownVote}
        title="Down Vote"
      />
    </div>
  )
}

export default ScoreButtonMolecule
