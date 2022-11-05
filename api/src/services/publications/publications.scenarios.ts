import type { Prisma, Publication } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PublicationCreateArgs>({
  publication: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        creator: {
          create: {
            email: 'String6938114',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        creator: {
          create: {
            email: 'String3695224',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Publication, 'publication'>
