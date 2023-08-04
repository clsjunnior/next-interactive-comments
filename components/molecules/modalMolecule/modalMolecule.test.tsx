import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ModalMolecule from './modalMolecule.component'

describe('ModalMolecule', () => {
  const mockProps = {
    show: true,
    title: 'Test Modal',
    message: 'This is a test message.',
    confirmationText: 'Confirm',
    cancelText: 'Cancel',
    handleClose: jest.fn(),
    handleConfirm: jest.fn(),
  }

  it('Should render modal correctly with provided props', () => {
    render(<ModalMolecule {...mockProps} />)

    const modalElement = screen.getByTestId('popup-modal')
    const titleElement = screen.getByText('Test Modal')
    const messageElement = screen.getByText('This is a test message.')
    const confirmationButton = screen.getByText('Confirm')
    const cancelButton = screen.getByText('Cancel')

    expect(modalElement).toBeInTheDocument()
    expect(titleElement).toBeInTheDocument()
    expect(messageElement).toBeInTheDocument()
    expect(confirmationButton).toBeInTheDocument()
    expect(cancelButton).toBeInTheDocument()
  })

  it('Should call handleClose when Cancel button is clicked', () => {
    render(<ModalMolecule {...mockProps} />)

    const cancelButton = screen.getByText('Cancel')
    fireEvent.click(cancelButton)

    expect(mockProps.handleClose).toHaveBeenCalled()
  })

  it('Should call handleConfirm when Confirm button is clicked', () => {
    render(<ModalMolecule {...mockProps} />)

    const confirmationButton = screen.getByText('Confirm')
    fireEvent.click(confirmationButton)

    expect(mockProps.handleConfirm).toHaveBeenCalled()
  })

  it('Should not render modal when show is false', () => {
    render(<ModalMolecule {...mockProps} show={false} />)

    const modalElement = screen.queryByTestId('popup-modal')

    expect(modalElement).not.toBeInTheDocument()
  })
})
