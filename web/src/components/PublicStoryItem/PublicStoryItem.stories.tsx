// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PublicStoryItem> = (args) => {
//   return <PublicStoryItem {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PublicStoryItem from './PublicStoryItem'

export const generated = () => {
  return <PublicStoryItem />
}

export default {
  title: 'Components/PublicStoryItem',
  component: PublicStoryItem,
} as ComponentMeta<typeof PublicStoryItem>
