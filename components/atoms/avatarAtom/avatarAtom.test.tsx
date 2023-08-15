import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AvatarAtom from './avatarAtom.component'

describe('AvatarAtom', () => {
  const imageUrl = './avatars/image-amyrobson.png'
  const altText = 'Avatar Image'

  it('renders the avatar image with the provided URL and alt text', () => {
    const { container } = render(
      <AvatarAtom imageUrl={imageUrl} altText={altText} />
    )
    const avatarImage = container.querySelector('img')

    expect(avatarImage).toBeInTheDocument()
    expect(avatarImage).toHaveAttribute('src', imageUrl)
  })

  it('renders the avatar image with the correct CSS classes', () => {
    const { container } = render(
      <AvatarAtom imageUrl={imageUrl} altText={altText} />
    )
    const avatarImage = container.querySelector('img')

    expect(avatarImage).toHaveClass(
      'inline-block h-9 w-9 rounded-full ring-2 ring-white'
    )
  })
})
