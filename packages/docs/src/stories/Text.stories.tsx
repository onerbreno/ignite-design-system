import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@onerbreno-ignite-ui/react/src/components/Text'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Delectus eius mollitia, molestiae repellat ullam assumenda.Numquam eius cum provident laudantium.Eveniet, animi sapiente rerum eius atque asperiores nihil non ut.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
