import type { StoryObj, Meta } from '@storybook/react'
import {
  Tooltip,
  TooltipProps,
} from '@onerbreno-ignite-ui/react/src/components/Tooltip'
import { Box, Text } from '@onerbreno-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    content: '21 de Outubro - Indisponível',
    children: (
      <Box>
        <Text>21</Text>
      </Box>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    delayDuration: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
