import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import IconAtom from './iconAtom.component'

describe('Icon Component', () => {
  it('should render delete icon', () => {
    const { getByTestId } = render(
      <IconAtom type="delete" fill="#ED6368" width={12} height={14} />
    )
    const iconElement = getByTestId('icon-svg')
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveAttribute('fill', '#ED6368')
    expect(iconElement).toHaveAttribute('width', '12')
    expect(iconElement).toHaveAttribute('height', '14')
  })

  it('should render edit icon', () => {
    const { getByTestId } = render(
      <IconAtom type="edit" fill="#5357B6" width={14} height={14} />
    )
    const iconElement = getByTestId('icon-svg')
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveAttribute('fill', '#5357B6')
    expect(iconElement).toHaveAttribute('width', '14')
    expect(iconElement).toHaveAttribute('height', '14')
  })

  it('should render minus icon', () => {
    const { getByTestId } = render(
      <IconAtom type="minus" fill="#C5C6EF" width={11} height={3} />
    )
    const iconElement = getByTestId('icon-svg')
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveAttribute('fill', '#C5C6EF')
    expect(iconElement).toHaveAttribute('width', '11')
    expect(iconElement).toHaveAttribute('height', '3')
  })

  it('should render plus icon', () => {
    const { getByTestId } = render(
      <IconAtom type="plus" fill="#C5C6EF" width={11} height={11} />
    )
    const iconElement = getByTestId('icon-svg')
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveAttribute('fill', '#C5C6EF')
    expect(iconElement).toHaveAttribute('width', '11')
    expect(iconElement).toHaveAttribute('height', '11')
  })

  it('should render reply icon', () => {
    const { getByTestId } = render(
      <IconAtom type="reply" fill="#5357B6" width={14} height={13} />
    )
    const iconElement = getByTestId('icon-svg')
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveAttribute('fill', '#5357B6')
    expect(iconElement).toHaveAttribute('width', '14')
    expect(iconElement).toHaveAttribute('height', '13')
  })
})
