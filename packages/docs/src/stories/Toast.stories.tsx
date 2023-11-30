import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button } from '@onerbreno-ignite-ui/react'
import {
  Toast,
  ToastProps,
} from '@onerbreno-ignite-ui/react/src/components/Toast'
import { useState } from 'react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {},
  argTypes: {
    open: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
    description: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)
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
          <Button onClick={() => setOpen((state) => !state)}>
            {`Finish payment`.toUpperCase()}
          </Button>
          {Story({
            args: {
              title: 'Toast dispatch',
              description: 'Toast has been dispatch in 1s ago',
              open,
              onOpenChange: setOpen,
            },
          })}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
