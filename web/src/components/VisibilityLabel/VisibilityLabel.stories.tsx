// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof VisibilityLabel> = (args) => {
//   return <VisibilityLabel {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import VisibilityLabel from './VisibilityLabel'

export const generated = () => {
  return <VisibilityLabel />
}

export default {
  title: 'Components/VisibilityLabel',
  component: VisibilityLabel,
} as ComponentMeta<typeof VisibilityLabel>
