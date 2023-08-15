'use client'
import { useState } from 'react'
import ms from 'ms'

import AvatarAtom from '@/components/atoms/avatarAtom/avatarAtom.component'
import BadgeAtom from '@/components/atoms/badgeAtom/badgeAtom.component'
import ButtonAtom from '@/components/atoms/buttonAtom/buttonAtom.component'
import CardAtom from '@/components/atoms/cardAtom/cardAtom.component'
import IconAtom from '@/components/atoms/iconAtom/iconAtom.component'
import TextareaAtom from '@/components/atoms/textareaAtom/textareaAtom.component'
import ButtonIconMolecule from '@/components/molecules/buttonIconMolecule/buttonIconMolecule.component'
import CommentInputMolecule from '@/components/molecules/commentInputMolecule/commentInputMolecule.component'
import ModalMolecule from '@/components/molecules/modalMolecule/modalMolecule.component'
import ScoreButtonMolecule from '@/components/molecules/scoreButtonMolecule/scoreButtonMolecule.component'
import UserLabelMolecule from '@/components/molecules/userLabelMolecule/userLabelMolecule.component'
import CommentCardOrganism, {
  CommentCardOrganismProps,
} from '@/components/organisms/commentCardOrganism/commentCardOrganism.component'

const Atoms = () => {
  const handleClick = () => {}
  return (
    <>
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
        <IconAtom type="delete" width={14} height={14} fill="#ED6368" />
        <IconAtom type="edit" width={14} height={14} fill="#5357B6" />
        <IconAtom type="minus" width={11} height={3} fill="#C5C6EF" />
        <IconAtom type="plus" width={11} height={11} fill="#C5C6EF" />
        <IconAtom type="reply" width={14} height={13} fill="#5357B6" />
      </div>
      <div className="flex bg-white p-2">
        <TextareaAtom />
      </div>
      <div className="flex bg-white p-2 ">
        <BadgeAtom>Badge</BadgeAtom>
      </div>
      <CardAtom>
        <div>
          <h2 className="text-xl font-semibold mb-2">Card Title</h2>
          <p className="text-gray-600">This is the content of the card.</p>
        </div>
      </CardAtom>
    </>
  )
}

const Molecules = () => {
  const [show, setShow] = useState(false)
  const [counter, setCounter] = useState(10)
  const handleModalClose = () => {
    setShow(false)
  }
  const handleModalConfirm = () => {
    console.log('Do something...')
    handleModalClose()
  }

  return (
    <>
      <div className="flex bg-white p-2 gap-4">
        <UserLabelMolecule
          username="celsojunnior"
          imageUrl="./avatars/image-amyrobson.png"
          createdAt={new Date()}
        />
        <UserLabelMolecule
          username="clsjunnior"
          imageUrl="./avatars/image-juliusomo.png"
          createdAt={new Date(new Date().getTime() - ms('1 week'))}
        />
      </div>
      <div className="flex bg-white p-2 gap-4">
        <ButtonIconMolecule
          icon={{ type: 'reply', fill: '#5357B6', width: 14, height: 13 }}
        >
          Reply
        </ButtonIconMolecule>
        <ButtonIconMolecule
          colorType="danger"
          icon={{ type: 'delete', fill: '#ED6368', width: 14, height: 14 }}
        >
          Delete
        </ButtonIconMolecule>
      </div>

      <div className="flex bg-white p-2 gap-4">
        <ButtonAtom colorType="grayish" onClick={() => setShow(true)}>
          Open Confirm Modal
        </ButtonAtom>
        <ModalMolecule
          show={show}
          title="Delete Comment"
          message="Are you sure you want to delete this comment? This will remove the comment and cant be undone."
          confirmationText="Yes, Delete"
          cancelText="No, cancel"
          handleClose={handleModalClose}
          handleConfirm={handleModalConfirm}
        />
      </div>

      <div className="flex bg-white p-2 gap-4">
        <ScoreButtonMolecule
          totalCount={counter}
          handleUpVote={() => setCounter(counter + 1)}
          handleDownVote={() => setCounter(counter - 1)}
        />
      </div>

      <div className="flex bg-white p-6 gap-4">
        <CommentInputMolecule
          avatarUser="clsjunnior"
          avatarUrl="./avatars/image-juliusomo.png"
          handleClick={() => console.log('send')}
          textareaProps={{ onChange: (e) => console.log(e.target.value) }}
        />
      </div>
    </>
  )
}

const Organisms = () => {
  const [counter, setCounter] = useState(10)
  const commentProps: CommentCardOrganismProps = {
    comment: {
      username: 'johnDoe',
      avatar: './avatars/image-amyrobson.png',
      createdAt: new Date(),
      commentText: 'test comment',
    },
    reply: {
      handleReply: () => console.log('reply'),
    },
    score: {
      counter: counter,
      handleUpVote: () => setCounter(counter + 1),
      handleDownVote: () => setCounter(counter - 1),
    },
  }

  return (
    <>
      <div className="flex flex-col p-2 gap-2">
        <CommentCardOrganism {...commentProps} />
        <CommentCardOrganism
          {...commentProps}
          comment={{
            username: 'clsjunnior',
            avatar: './avatars/image-amyrobson.png',
            createdAt: new Date(),
            commentText: 'test comment',
            isCurrentUser: true,
          }}
          editComment={{ handleEditCallback: () => console.log('edit') }}
          deleteComment={{ handleDeleteCallback: () => console.log('delete') }}
        />
      </div>
    </>
  )
}

export default function Design() {
  return (
    <main className="flex flex-row items-start justify-between py-12 px-24 gap-6">
      <div className="flex flex-col flex-1">
        <h1 className="text-2xl text-moderate-blue font-semibold mb-4">
          Atoms
        </h1>
        <div className="flex flex-col gap-6">
          <Atoms />
        </div>
        <h1 className="text-2xl text-moderate-blue font-semibold my-6">
          Molecules
        </h1>
        <div className="flex flex-col gap-6">
          <Molecules />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <h1 className="text-2xl text-moderate-blue font-semibold mb-4">
          Organisms
        </h1>
        <div className="flex flex-col gap-6">
          <Organisms />
        </div>
      </div>
    </main>
  )
}
