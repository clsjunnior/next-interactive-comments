import ButtonAtom from '@/components/atoms/buttonAtom/buttonAtom.component'
import IconAtom, {
  IconSVGProps,
} from '@/components/atoms/iconAtom/iconAtom.component'
import React, { PropsWithChildren } from 'react'

interface ButtonIconProps {
  icon: IconSVGProps
  colorType?: 'blue' | 'danger' | 'grayish'
}

const ButtonIconMolecule: React.FC<PropsWithChildren<ButtonIconProps>> = ({
  icon,
  colorType = 'blue',
  children,
}) => {
  return (
    <ButtonAtom colorType={colorType} isLink>
      <IconAtom {...icon} />
      {children}
    </ButtonAtom>
  )
}

export default ButtonIconMolecule
