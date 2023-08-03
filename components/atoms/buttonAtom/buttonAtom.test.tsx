import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ButtonAtom from './buttonAtom.component'

describe('ButtonAtom', () => {
  it('Should render button correctly with default props', () => {
    const { getByTestId } = render(<ButtonAtom>Click me</ButtonAtom>)
    const buttonElement = getByTestId('buttonAtom')

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent('Click me')
    expect(buttonElement).toHaveClass('bg-moderate-blue')
  })

  it('Should render button correctly with danger colorType', () => {
    const { getByTestId } = render(
      <ButtonAtom colorType="danger">Delete</ButtonAtom>
    )
    const buttonElement = getByTestId('buttonAtom')

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent('Delete')
    expect(buttonElement).toHaveClass('bg-soft-red')
  })

  it('Should call onClick function when clicked', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = render(
      <ButtonAtom onClick={onClickMock}>Click me</ButtonAtom>
    )
    const buttonElement = getByTestId('buttonAtom')

    fireEvent.click(buttonElement)

    expect(onClickMock).toHaveBeenCalled()
  })
})
