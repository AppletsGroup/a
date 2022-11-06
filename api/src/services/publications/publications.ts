import type {
  QueryResolvers,
  MutationResolvers,
  PublicationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { StoryInputArgs } from '../stories/stories'

export const publications: QueryResolvers['publications'] = () => {
  const currentUser = context.currentUser

  return db.publication.findMany({
    where: {
      creatorId: currentUser.id,
    },
  })
}

export const publicPublication: QueryResolvers['publication'] = ({ slug }) => {
  return db.publication.findFirst({
    where: { slug, isPublic: true },
  })
}

export const publication: QueryResolvers['publication'] = ({ id }) => {
  return db.publication.findUnique({
    where: { id },
  })
}

export const createPublication: MutationResolvers['createPublication'] = ({
  input,
}) => {
  const currentUser = context.currentUser

  return db.publication.create({
    data: {
      ...input,
      creatorId: currentUser.id,
    },
  })
}

export const updatePublication: MutationResolvers['updatePublication'] = ({
  id,
  input,
}) => {
  return db.publication.update({
    data: input,
    where: { id },
  })
}

export const deletePublication: MutationResolvers['deletePublication'] = ({
  id,
}) => {
  return db.publication.delete({
    where: { id },
  })
}

export const Publication: PublicationRelationResolvers = {
  creator: (_obj, { root }) => {
    return db.publication.findUnique({ where: { id: root?.id } }).creator()
  },
  stories: (
    {
      where = { isPublic: true },
      orderBy = { id: 'desc' },
    }: StoryInputArgs = {},
    { root }
  ) => {
    return db.publication
      .findUnique({ where: { id: root?.id } })
      .stories({ where, orderBy })
  },
}
