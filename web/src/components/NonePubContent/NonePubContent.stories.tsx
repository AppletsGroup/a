// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof NonePubContent> = (args) => {
//   return <NonePubContent {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import NonePubContent from './NonePubContent'

export const generated = () => {
  return <NonePubContent />
}

export default {
  title: 'Components/NonePubContent',
  component: NonePubContent,
} as ComponentMeta<typeof NonePubContent>
