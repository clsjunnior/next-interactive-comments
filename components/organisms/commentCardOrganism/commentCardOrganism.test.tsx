import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CommentCardOrganism from './commentCardOrganism.component'

describe('CommentCardOrganism', () => {
  const mockComment = {
    username: 'user123',
    avatar: 'mock-avatar-url',
    createdAt: new Date(),
    commentText: 'This is a test comment.',
  }
  const mockScore = {
    counter: 42,
    handleUpVote: jest.fn(),
    handleDownVote: jest.fn(),
  }
  const mockReply = {
    handleReply: jest.fn(),
  }
  const mockDeleteComment = {
    handleDeleteCallback: jest.fn(),
  }
  const mockEditComment = {
    handleEditCallback: jest.fn(),
  }

  it('Should render comment card correctly with provided props', () => {
    render(
      <CommentCardOrganism
        comment={mockComment}
        score={mockScore}
        reply={mockReply}
      />
    )

    const usernameElement = screen.getByText('user123')
    const avatarElement = screen.getByAltText('user123')
    const createdAtElement = screen.getByText('just now')
    const commentTextElement = screen.getByText('This is a test comment.')
    const scoreButton = screen.getByTestId('score-button-molecule')
    const replyButton = screen.getByText('Reply')

    expect(usernameElement).toBeInTheDocument()
    expect(avatarElement).toBeInTheDocument()
    expect(createdAtElement).toBeInTheDocument()
    expect(commentTextElement).toBeInTheDocument()
    expect(scoreButton).toBeInTheDocument()
    expect(replyButton).toBeInTheDocument()
  })

  it('Should call handleUpVote when up vote button is clicked', () => {
    render(
      <CommentCardOrganism
        comment={mockComment}
        score={mockScore}
        reply={mockReply}
      />
    )

    const upVoteButton = screen.getByTitle('Up Vote')
    fireEvent.click(upVoteButton)

    expect(mockScore.handleUpVote).toHaveBeenCalled()
  })

  it('Should call handleDownVote when down vote button is clicked', () => {
    render(
      <CommentCardOrganism
        comment={mockComment}
        score={mockScore}
        reply={mockReply}
      />
    )

    const downVoteButton = screen.getByTitle('Down Vote')
    fireEvent.click(downVoteButton)

    expect(mockScore.handleDownVote).toHaveBeenCalled()
  })

  it('Should call handleReply when reply button is clicked', () => {
    render(
      <CommentCardOrganism
        comment={mockComment}
        score={mockScore}
        reply={mockReply}
      />
    )

    const replyButton = screen.getByText('Reply')
    fireEvent.click(replyButton)

    expect(mockReply.handleReply).toHaveBeenCalled()
  })

  it('Should render comment card correctly with delete and edit buttons for current user', () => {
    render(
      <CommentCardOrganism
        comment={{ ...mockComment, isCurrentUser: true }}
        score={mockScore}
        reply={mockReply}
        deleteComment={mockDeleteComment}
        editComment={mockEditComment}
      />
    )

    const deleteButton = screen.getByText('Delete')
    const editButton = screen.getByText('Edit')

    expect(deleteButton).toBeInTheDocument()
    expect(editButton).toBeInTheDocument()
  })

  it('Should call handleDeleteCallback when delete button is clicked', () => {
    render(
      <CommentCardOrganism
        comment={{ ...mockComment, isCurrentUser: true }}
        score={mockScore}
        reply={mockReply}
        deleteComment={mockDeleteComment}
        editComment={mockEditComment}
      />
    )

    const deleteButton = screen.getByText('Delete')
    fireEvent.click(deleteButton)

    expect(mockDeleteComment.handleDeleteCallback).toHaveBeenCalled()
  })

  it('Should call handleEditCallback and switch to edit mode when edit button is clicked', () => {
    render(
      <CommentCardOrganism
        comment={{ ...mockComment, isCurrentUser: true }}
        score={mockScore}
        reply={mockReply}
        deleteComment={mockDeleteComment}
        editComment={mockEditComment}
      />
    )

    const editButton = screen.getByText('Edit')
    fireEvent.click(editButton)

    const updateButton = screen.getByText('Update')
    expect(updateButton).toBeInTheDocument()
  })

  it('Should call handleEditCallback and set isEdit to false when handleUpdate is called', () => {
    render(
      <CommentCardOrganism
        comment={{ ...mockComment, isCurrentUser: true }}
        score={mockScore}
        reply={mockReply}
        deleteComment={mockDeleteComment}
        editComment={mockEditComment}
      />
    )

    const editButton = screen.getByText('Edit')
    fireEvent.click(editButton)

    const updateButton = screen.getByText('Update')
    expect(updateButton).toBeInTheDocument()

    fireEvent.click(updateButton)

    expect(mockEditComment.handleEditCallback).toHaveBeenCalled()

    const updatedButton = screen.queryByText('Update')
    expect(updatedButton).not.toBeInTheDocument()
  })

  it('Should update updateInput state when handleChangeInput is called', () => {
    render(
      <CommentCardOrganism
        comment={{ ...mockComment, isCurrentUser: true }}
        score={mockScore}
        reply={mockReply}
        deleteComment={mockDeleteComment}
        editComment={mockEditComment}
      />
    )

    const editButton = screen.getByText('Edit')
    fireEvent.click(editButton)

    const textareaElement = screen.getByRole('textbox')

    fireEvent.change(textareaElement, { target: { value: 'Updated comment' } })

    expect(textareaElement).toHaveValue('Updated comment')
  })
})
