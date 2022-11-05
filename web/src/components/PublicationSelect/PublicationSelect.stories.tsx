// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PublicationSelect> = (args) => {
//   return <PublicationSelect {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PublicationSelect from './PublicationSelect'

export const generated = () => {
  return <PublicationSelect />
}

export default {
  title: 'Components/PublicationSelect',
  component: PublicationSelect,
} as ComponentMeta<typeof PublicationSelect>
