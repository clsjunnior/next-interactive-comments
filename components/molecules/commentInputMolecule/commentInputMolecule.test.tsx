import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CommentInputMolecule from './commentInputMolecule.component'

describe('CommentInputMolecule', () => {
  const mockAvatarUrl = 'mock-avatar-url'
  const mockAvatarUser = 'mock-avatar-user'
  const mockTextareaProps = {
    placeholder: 'Enter your comment...',
    rows: 4,
  }
  const mockHandleClick = jest.fn()

  it('Should render comment input correctly with provided props', () => {
    render(
      <CommentInputMolecule
        avatarUrl={mockAvatarUrl}
        avatarUser={mockAvatarUser}
        handleClick={mockHandleClick}
        textareaProps={mockTextareaProps}
      />
    )

    const avatarElement = screen.getByAltText(`user ${mockAvatarUser}`)
    const textareaElement = screen.getByPlaceholderText('Enter your comment...')
    const sendButton = screen.getByText('Send')

    expect(avatarElement).toBeInTheDocument()
    expect(textareaElement).toBeInTheDocument()
    expect(sendButton).toBeInTheDocument()
  })

  it('Should call handleClick when Send button is clicked', () => {
    render(
      <CommentInputMolecule
        avatarUrl={mockAvatarUrl}
        avatarUser={mockAvatarUser}
        handleClick={mockHandleClick}
      />
    )

    const sendButton = screen.getByText('Send')
    fireEvent.click(sendButton)

    expect(mockHandleClick).toHaveBeenCalled()
  })

  it('Should render "Update" text on the button when isUpdateField is true', () => {
    render(
      <CommentInputMolecule
        isUpdateField
        handleClick={mockHandleClick}
        textareaProps={mockTextareaProps}
      />
    )

    const updateButton = screen.getByText('Update')
    expect(updateButton).toBeInTheDocument()
  })
})
