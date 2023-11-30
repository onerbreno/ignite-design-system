import { ComponentProps } from 'react'
import * as ToastUI from '@radix-ui/react-toast'

import {
  ToastContainer,
  ToastViewport,
  ToastCloseButton,
  ToastDescription,
  ToastTitle,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description?: string
  open: boolean
}

export function Toast({
  title,
  description = undefined,
  open,
  ...props
}: ToastProps) {
  return (
    <ToastUI.Provider swipeDirection="right">
      <ToastContainer open={open} {...props}>
        <ToastTitle as="h2">{title}</ToastTitle>

        <ToastDescription as="span">{description}</ToastDescription>

        <ToastCloseButton asChild>
          <X size={20} />
        </ToastCloseButton>
      </ToastContainer>

      <ToastViewport />
    </ToastUI.Provider>
  )
}
