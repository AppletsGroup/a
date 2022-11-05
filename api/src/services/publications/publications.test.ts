import type { Publication } from '@prisma/client'

import {
  publications,
  publication,
  createPublication,
  updatePublication,
  deletePublication,
} from './publications'
import type { StandardScenario } from './publications.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('publications', () => {
  scenario('returns all publications', async (scenario: StandardScenario) => {
    const result = await publications()

    expect(result.length).toEqual(Object.keys(scenario.publication).length)
  })

  scenario(
    'returns a single publication',
    async (scenario: StandardScenario) => {
      const result = await publication({ id: scenario.publication.one.id })

      expect(result).toEqual(scenario.publication.one)
    }
  )

  scenario('creates a publication', async (scenario: StandardScenario) => {
    const result = await createPublication({
      input: {
        name: 'String',
        description: 'String',
        creatorId: scenario.publication.two.creatorId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.creatorId).toEqual(scenario.publication.two.creatorId)
  })

  scenario('updates a publication', async (scenario: StandardScenario) => {
    const original = (await publication({
      id: scenario.publication.one.id,
    })) as Publication
    const result = await updatePublication({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a publication', async (scenario: StandardScenario) => {
    const original = (await deletePublication({
      id: scenario.publication.one.id,
    })) as Publication
    const result = await publication({ id: original.id })

    expect(result).toEqual(null)
  })
})
