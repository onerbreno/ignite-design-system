import React, { ComponentProps } from 'react'
import * as TooltipUI from '@radix-ui/react-tooltip'
import { TooltipContent, TooltipTrigger, TooltipArrow } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipUI.Root> {
  content: string
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipUI.TooltipProvider>
      <TooltipUI.Root {...props}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>

        <TooltipUI.Portal>
          <TooltipContent sideOffset={8}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipUI.Portal>
      </TooltipUI.Root>
    </TooltipUI.TooltipProvider>
  )
}
