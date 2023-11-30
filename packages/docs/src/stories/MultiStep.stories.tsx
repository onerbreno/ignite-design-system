import type { StoryObj, Meta } from '@storybook/react'
import { Box } from '@onerbreno-ignite-ui/react/src/components/Box'
import {
  MultiStep,
  MultiStepProps,
} from '@onerbreno-ignite-ui/react/src/components/MultiStep'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
