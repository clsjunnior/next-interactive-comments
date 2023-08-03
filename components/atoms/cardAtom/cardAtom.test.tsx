import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Card from './cardAtom.component'

describe('Card', () => {
  it('renders children correctly', () => {
    const cardContent = (
      <>
        <h2>Card Title</h2>
        <p>This is the content of the card.</p>
      </>
    )

    render(<Card>{cardContent}</Card>)
    const titleElement = screen.getByText('Card Title')
    const contentElement = screen.getByText('This is the content of the card.')

    expect(titleElement).toBeInTheDocument()
    expect(contentElement).toBeInTheDocument()
  })
})
