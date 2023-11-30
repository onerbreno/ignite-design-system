import type { StoryObj, Meta } from '@storybook/react'
import {
  Tooltip,
  TooltipProps,
} from '@onerbreno-ignite-ui/react/src/components/Tooltip'
import { Box, Button } from '@onerbreno-ignite-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    content: 'A tooltip example',
    children: <Button>Hover-me</Button>,
  },
  argTypes: {
    placement: {
      defaultValue: 'top',
      type: 'string',
      description: 'Posição do tooltip',
      options: ['top', 'bottom', 'right', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
    delay: {
      type: 'number',
      description: 'Tempo em ms para aparecer o tooltip',
      defaultValue: 250,
    },
    content: {
      type: 'string',
      description: 'Conteúdo',
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '$2',
            padding: '$10',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

export const WithDelay: StoryObj<TooltipProps> = {
  args: {
    delay: 0,
  },
}

export const Placement: StoryObj<TooltipProps> = {
  args: {
    placement: 'right',
  },
}
