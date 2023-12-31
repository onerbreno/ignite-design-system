import type { StoryObj, Meta } from '@storybook/react'
import {
  Avatar,
  AvatarProps,
} from '@onerbreno-ignite-ui/react/src/components/Avatar'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/onerbreno.png',
    alt: 'Breno Dias',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
