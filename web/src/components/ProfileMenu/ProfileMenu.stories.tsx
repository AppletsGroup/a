// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ProfileMenu> = (args) => {
//   return <ProfileMenu {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ProfileMenu from './ProfileMenu'

export const generated = () => {
  return <ProfileMenu />
}

export default {
  title: 'Components/ProfileMenu',
  component: ProfileMenu,
} as ComponentMeta<typeof ProfileMenu>
