import { ComponentProps } from 'react'
import * as TooltipRadix from '@radix-ui/react-tooltip'
import { TooltipContent, TooltipTrigger, TooltipArrow } from './styles'

export type TooltipPlacement = 'top' | 'bottom' | 'right' | 'left'
export interface TooltipProps extends ComponentProps<typeof TooltipRadix.Root> {
  content: string
  delay?: number
  placement?: TooltipPlacement
}

export function Tooltip({
  children,
  content,
  delay = 250,
  placement = 'top',
  ...props
}: TooltipProps) {
  return (
    <TooltipRadix.TooltipProvider>
      <TooltipRadix.Root {...props} delayDuration={delay}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>

        <TooltipRadix.Portal>
          <TooltipContent sideOffset={8} side={placement}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
