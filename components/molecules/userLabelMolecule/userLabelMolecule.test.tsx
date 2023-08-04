import React from 'react'
import { render, screen } from '@testing-library/react'
import ms from 'ms'
import '@testing-library/jest-dom/extend-expect'
import UserLabelMolecule from './userLabelMolecule.component'

describe('UserLabelMolecule', () => {
  it('renders user label with correct content', () => {
    const imageUrl = 'avatar.jpg'
    const username = 'JohnDoe'
    const createdAt = new Date(new Date().getTime() - ms('1 week'))

    render(
      <UserLabelMolecule
        imageUrl={imageUrl}
        username={username}
        createdAt={createdAt}
      />
    )

    const avatarElement = screen.getByAltText(username)
    const usernameElement = screen.getByText(username)
    const timeAgoElement = screen.getByText(/(week|day|hour) ago/)

    expect(avatarElement).toBeInTheDocument()
    expect(usernameElement).toBeInTheDocument()
    expect(timeAgoElement).toBeInTheDocument()
  })
})
