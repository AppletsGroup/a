import type { Story } from '@prisma/client'

import {
  stories,
  story,
  createStory,
  updateStory,
  deleteStory,
} from './stories'
import type { StandardScenario } from './stories.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('stories', () => {
  scenario('returns all stories', async (scenario: StandardScenario) => {
    const result = await stories()

    expect(result.length).toEqual(Object.keys(scenario.story).length)
  })

  scenario('returns a single story', async (scenario: StandardScenario) => {
    const result = await story({ id: scenario.story.one.id })

    expect(result).toEqual(scenario.story.one)
  })

  scenario('creates a story', async () => {
    const result = await createStory({
      input: { title: 'String', content: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.content).toEqual('String')
  })

  scenario('updates a story', async (scenario: StandardScenario) => {
    const original = (await story({ id: scenario.story.one.id })) as Story
    const result = await updateStory({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a story', async (scenario: StandardScenario) => {
    const original = (await deleteStory({ id: scenario.story.one.id })) as Story
    const result = await story({ id: original.id })

    expect(result).toEqual(null)
  })
})
