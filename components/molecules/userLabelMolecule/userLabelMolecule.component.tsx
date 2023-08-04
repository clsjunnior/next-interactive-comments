import AvatarAtom from '@/components/atoms/avatarAtom/avatarAtom.component'
import ms from 'ms'
import React from 'react'

interface UserLabelProps {
  imageUrl: string
  username: string
  createdAt: Date
}

const UserLabelMolecule: React.FC<UserLabelProps> = ({
  imageUrl,
  username,
  createdAt,
}) => {
  function timeAgoFromNow(createdAt: Date): string {
    const now = new Date()
    const difference = now.getTime() - createdAt.getTime()

    const timeUnits: { unit: string; value: number }[] = [
      { unit: 'week', value: ms('1 week') },
      { unit: 'day', value: ms('1 day') },
      { unit: 'hour', value: ms('1 hour') },
    ]

    for (const { unit, value } of timeUnits) {
      if (difference >= value) {
        const count = Math.floor(difference / value)
        return count > 1 ? `${count} ${unit}s ago` : `1 ${unit} ago`
      }
    }

    return 'just now'
  }

  return (
    <div className="flex items-center gap-4">
      <AvatarAtom imageUrl={imageUrl} altText={username} />
      <span className="font-bold text-dark-blue">{username}</span>
      <span className="font-medium text-grayish-blue-fonts text-sm">
        {timeAgoFromNow(createdAt)}
      </span>
    </div>
  )
}

export default UserLabelMolecule
