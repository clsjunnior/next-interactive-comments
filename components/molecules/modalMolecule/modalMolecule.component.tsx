import ButtonAtom from '@/components/atoms/buttonAtom/buttonAtom.component'
import React from 'react'

interface ModalProps {
  show: boolean
  title: string
  message: string
  confirmationText: string
  cancelText: string
  handleClose: () => void
  handleConfirm: () => void
}

const ModalMolecule: React.FC<ModalProps> = ({
  show = false,
  title,
  message,
  confirmationText,
  cancelText,
  handleClose,
  handleConfirm,
}) => {
  if (!show) return null

  return (
    <div
      id="popup-modal"
      data-testid="popup-modal"
      tabIndex={-1}
      className="fixed flex items-center justify-center top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full bg-dark-blue bg-opacity-40"
    >
      <div className="relative w-full max-w-sm max-h-full">
        <div className="relative rounded-lg shadow bg-white">
          <div className="p-6">
            <h1 className="mb-3 text-lg font-medium text-grayish-blue">
              {title}
            </h1>
            <p className="mb-6 text-sm text-left text-grayish-blue-fonts font-normal">
              {message}
            </p>
            <div className="flex gap-2 items-center justify-center">
              <ButtonAtom
                colorType="grayish"
                onClick={handleClose}
                className="uppercase w-full justify-center"
              >
                {cancelText}
              </ButtonAtom>
              <ButtonAtom
                colorType="danger"
                onClick={handleConfirm}
                className="uppercase w-full justify-center"
              >
                {confirmationText}
              </ButtonAtom>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalMolecule
