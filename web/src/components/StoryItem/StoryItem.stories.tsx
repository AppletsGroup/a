// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StoryItem> = (args) => {
//   return <StoryItem {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StoryItem from './StoryItem'

export const generated = () => {
  return <StoryItem />
}

export default {
  title: 'Components/StoryItem',
  component: StoryItem,
} as ComponentMeta<typeof StoryItem>
