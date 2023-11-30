import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipTrigger = styled(Tooltip.Trigger, {
  width: 'max-content',
})

export const TooltipContent = styled(Tooltip.Content, {
  padding: '$4 $6',
  background: '$black',
  color: '$gray100',
  borderRadius: '$sm',

  fontFamily: '$default',
  fontWeight: '$medium',
  fontSize: '$sm',
  lineHeight: '$short',
  userSelect: 'none',
  cursor: 'help',

  '&:after': {
    content: '',
    fill: '$black',
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$black',
})
