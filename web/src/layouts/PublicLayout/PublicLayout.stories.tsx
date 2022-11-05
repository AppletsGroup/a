import type { ComponentMeta, ComponentStory } from '@storybook/react'

import PublicLayout from './PublicLayout'

export const generated: ComponentStory<typeof PublicLayout> = (args) => {
  return <PublicLayout {...args} />
}

export default {
  title: 'Layouts/PublicLayout',
  component: PublicLayout,
} as ComponentMeta<typeof PublicLayout>
