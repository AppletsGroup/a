import type { ComponentMeta, ComponentStory } from '@storybook/react'

import PublicationSharingPage from './PublicationSharingPage'

export const generated: ComponentStory<typeof PublicationSharingPage> = (args) => {
  return <PublicationSharingPage id={42} {...args} />
}

export default {
  title: 'Pages/PublicationSharingPage',
  component: PublicationSharingPage,
} as ComponentMeta<typeof PublicationSharingPage>
