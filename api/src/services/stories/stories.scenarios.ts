import type { Prisma, Story } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StoryCreateArgs>({
  story: {
    one: { data: { title: 'String', content: 'String' } },
    two: { data: { title: 'String', content: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Story, 'story'>
