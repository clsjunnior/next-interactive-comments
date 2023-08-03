import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BadgeAtom from './badgeAtom.component'

describe('BadgeAtom', () => {
  it('renders with default content', () => {
    render(<BadgeAtom />)
    const badgeElement = screen.getByText('you')
    expect(badgeElement).toBeInTheDocument()
  })

  it('renders with custom content', () => {
    const customContent = 'Custom Badge'
    render(<BadgeAtom>{customContent}</BadgeAtom>)
    const badgeElement = screen.getByText(customContent)
    expect(badgeElement).toBeInTheDocument()
  })

  it('renders with appropriate styling', () => {
    const customContent = 'Custom Badge'
    render(<BadgeAtom>{customContent}</BadgeAtom>)
    const badgeElement = screen.getByText(customContent)

    expect(badgeElement).toHaveClass(
      'bg-moderate-blue text-white text-xs font-medium tracking-wide px-2 py-0.5 rounded'
    )
  })
})
