import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ScoreButtonMolecule from './scoreButtonMolecule.component'

describe('ScoreButtonMolecule', () => {
  const mockProps = {
    totalCount: 42,
    handleUpVote: jest.fn(),
    handleDownVote: jest.fn(),
  }

  it('Should render score button correctly with provided props', () => {
    render(<ScoreButtonMolecule {...mockProps} />)

    const scoreButtonElement = screen.getByTestId('score-button-molecule')
    const upVoteButton = screen.getByTitle('Up Vote')
    const downVoteButton = screen.getByTitle('Down Vote')
    const totalCountElement = screen.getByText('42')

    expect(scoreButtonElement).toBeInTheDocument()
    expect(upVoteButton).toBeInTheDocument()
    expect(downVoteButton).toBeInTheDocument()
    expect(totalCountElement).toBeInTheDocument()
  })

  it('Should call handleUpVote when Up Vote button is clicked', () => {
    render(<ScoreButtonMolecule {...mockProps} />)

    const upVoteButton = screen.getByTitle('Up Vote')
    fireEvent.click(upVoteButton)

    expect(mockProps.handleUpVote).toHaveBeenCalled()
  })

  it('Should call handleDownVote when Down Vote button is clicked', () => {
    render(<ScoreButtonMolecule {...mockProps} />)

    const downVoteButton = screen.getByTitle('Down Vote')
    fireEvent.click(downVoteButton)

    expect(mockProps.handleDownVote).toHaveBeenCalled()
  })
})
