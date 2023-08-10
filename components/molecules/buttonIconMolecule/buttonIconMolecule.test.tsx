import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ButtonIconMolecule from './buttonIconMolecule.component'
import { IconSVGProps } from '@/components/atoms/iconAtom/iconAtom.component'

describe('ButtonIconMolecule', () => {
  const mockIconProps: IconSVGProps = {
    type: 'reply',
    width: 14,
    height: 14,
  }

  it('Should render button icon correctly with default props', () => {
    const { getByTestId, getByText } = render(
      <ButtonIconMolecule icon={mockIconProps}>Button Text</ButtonIconMolecule>
    )

    const buttonElement = getByTestId('buttonAtom')
    const iconElement = getByTestId('icon-svg')
    const buttonTextElement = getByText('Button Text')

    expect(buttonElement).toBeInTheDocument()
    expect(iconElement).toBeInTheDocument()
    expect(buttonTextElement).toBeInTheDocument()
  })

  it('Should render only the icon when onlyIcon is true', () => {
    const { getByTestId, queryByText } = render(
      <ButtonIconMolecule icon={mockIconProps} onlyIcon>
        Icon Only
      </ButtonIconMolecule>
    )

    const buttonElement = getByTestId('buttonAtom')
    const buttonText = queryByText('Icon Only')

    expect(buttonElement).toBeInTheDocument()
    expect(buttonText).toBeNull()
  })

  it('Should apply custom styles when customStyle is provided', () => {
    const { getByTestId } = render(
      <ButtonIconMolecule
        icon={mockIconProps}
        customStyle="text-xl border border-gray-500"
      >
        Custom Style
      </ButtonIconMolecule>
    )

    const buttonElement = getByTestId('buttonAtom')
    expect(buttonElement).toHaveClass('text-xl border border-gray-500')
  })
})
