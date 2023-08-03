'use client'

import AvatarAtom from '@/components/atoms/avatarAtom/avatarAtom.component'
import BadgeAtom from '@/components/atoms/badgeAtom/badgeAtom.component'
import ButtonAtom from '@/components/atoms/buttonAtom/buttonAtom.component'
import Icon from '@/components/atoms/iconAtom/iconAtom.component'
import TextareaAtom from '@/components/atoms/textareaAtom/textareaAtom.component'

export default function Home() {
  const handleClick = () => {}

  return (
    <main className="flex flex-col items-start justify-between p-24">
      <div className="flex flex-col gap-6">
        <div className="flex gap-2">
          <ButtonAtom colorType="grayish" onClick={handleClick}>
            Click Me
          </ButtonAtom>
          <ButtonAtom colorType="blue" onClick={handleClick}>
            Click Me
          </ButtonAtom>
          <ButtonAtom colorType="danger" onClick={handleClick}>
            Click Me
          </ButtonAtom>
          <ButtonAtom onClick={handleClick} isLink>
            Click Me
          </ButtonAtom>
        </div>
        <AvatarAtom imageUrl={'./avatars/image-amyrobson.png'} altText="alt" />
        <div className="flex items-center gap-4">
          <Icon type="delete" width={14} height={14} fill="#ED6368" />
          <Icon type="edit" width={14} height={14} fill="#5357B6" />
          <Icon type="minus" width={11} height={3} fill="#C5C6EF" />
          <Icon type="plus" width={11} height={11} fill="#C5C6EF" />
          <Icon type="reply" width={14} height={13} fill="#5357B6" />
        </div>
        <div className="flex bg-white p-6 rounded-lg">
          <TextareaAtom />
        </div>
        <div className="flex bg-white p-6 rounded-lg">
          <BadgeAtom>Badge</BadgeAtom>
        </div>
      </div>
    </main>
  )
}
