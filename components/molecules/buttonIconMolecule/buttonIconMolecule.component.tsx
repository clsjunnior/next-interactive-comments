import ButtonAtom from '@/components/atoms/buttonAtom/buttonAtom.component'
import IconAtom, {
  IconSVGProps,
} from '@/components/atoms/iconAtom/iconAtom.component'
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconSVGProps
  colorType?: 'blue' | 'danger' | 'grayish'
  onlyIcon?: boolean
  customStyle?: string
}

const ButtonIconMolecule: React.FC<PropsWithChildren<ButtonIconProps>> = ({
  icon,
  colorType = 'blue',
  onlyIcon = false,
  customStyle,
  children,
  ...rest
}) => {
  return (
    <ButtonAtom className={customStyle} colorType={colorType} isLink {...rest}>
      <IconAtom {...icon} />
      {!onlyIcon && children}
    </ButtonAtom>
  )
}

export default ButtonIconMolecule
