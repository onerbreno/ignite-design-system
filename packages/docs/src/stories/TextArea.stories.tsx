import type { StoryObj, Meta } from '@storybook/react'
import { Box } from '@onerbreno-ignite-ui/react/src/components/Box'
import { Text } from '@onerbreno-ignite-ui/react/src/components/Text'
import {
  TextArea,
  TextAreaProps,
} from '@onerbreno-ignite-ui/react/src/components/TextArea'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
