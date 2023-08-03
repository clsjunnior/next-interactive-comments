import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TextareaAtom from './textareaAtom.component'

describe('TextareaAtom', () => {
  it('renders with the default placeholder', () => {
    render(<TextareaAtom />)
    const textareaElement = screen.getByPlaceholderText('Add a comment...')
    expect(textareaElement).toBeInTheDocument()
  })

  it('renders with a custom placeholder', () => {
    const customPlaceholder = 'Write something here...'
    render(<TextareaAtom placeholder={customPlaceholder} />)
    const textareaElement = screen.getByPlaceholderText(customPlaceholder)
    expect(textareaElement).toBeInTheDocument()
  })

  it('handles user input correctly', () => {
    render(<TextareaAtom />)
    const textareaElement = screen.getByPlaceholderText('Add a comment...')
    const inputText = 'This is a test comment.'

    fireEvent.change(textareaElement, { target: { value: inputText } })
    expect(textareaElement).toHaveValue(inputText)
  })

  it('renders with a specific number of rows', () => {
    const customRows = 6
    render(<TextareaAtom rows={customRows} />)
    const textareaElement = screen.getByPlaceholderText('Add a comment...')
    expect(textareaElement).toHaveAttribute('rows', customRows.toString())
  })
})
