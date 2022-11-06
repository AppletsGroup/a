import type { ComponentMeta, ComponentStory } from '@storybook/react'

import StorySharingPage from './StorySharingPage'

export const generated: ComponentStory<typeof StorySharingPage> = (args) => {
  return <StorySharingPage id={42} {...args} />
}

export default {
  title: 'Pages/StorySharingPage',
  component: StorySharingPage,
} as ComponentMeta<typeof StorySharingPage>
