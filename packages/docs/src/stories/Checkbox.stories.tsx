import type { StoryObj, Meta } from '@storybook/react'
import { Box } from '@onerbreno-ignite-ui/react/src/components/Box'
import { Text } from '@onerbreno-ignite-ui/react/src/components/Text'
import {
  Checkbox,
  CheckboxProps,
} from '@onerbreno-ignite-ui/react/src/components/Checkbox'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', gap: '$2' }}>
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
