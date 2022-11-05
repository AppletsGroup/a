import { Prisma } from '@prisma/client'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

const STORIES_PER_PAGE = 100

export const storyPage = ({ page = 1 }) => {
  const offset = (page - 1) * STORIES_PER_PAGE
  const currentUser = context.currentUser

  return {
    stories: db.story.findMany({
      take: STORIES_PER_PAGE,
      skip: offset,
      where: {
        authorId: currentUser.id,
      },
      orderBy: { id: 'desc' },
    }),
    count: db.story.count({
      where: {
        authorId: currentUser.id,
      },
    }),
  }
}

export const publicStories = ({ page = 1 }) => {
  const offset = (page - 1) * STORIES_PER_PAGE

  return {
    stories: db.story.findMany({
      take: STORIES_PER_PAGE,
      skip: offset,
      where: {
        isPublic: true,
      },
      orderBy: { id: 'desc' },
    }),
    count: db.story.count({
      where: {
        isPublic: true,
      },
    }),
  }
}

export const publicationStories = ({ page = 1, publicationId }) => {
  const offset = (page - 1) * STORIES_PER_PAGE

  return {
    stories: db.story.findMany({
      take: STORIES_PER_PAGE,
      skip: offset,
      where: {
        publicationId,
      },
      orderBy: { id: 'desc' },
    }),
    count: db.story.count({
      where: {
        publicationId,
      },
    }),
  }
}

export const stories: QueryResolvers['stories'] = async () => {
  const currentUser = context.currentUser

  return db.story.findMany({
    where: {
      authorId: currentUser.id,
    },
    orderBy: { id: 'desc' },
  })
}

export const story: QueryResolvers['story'] = ({ id }) => {
  return db.story.findUnique({
    where: { id },
  })
}

export const createStory: MutationResolvers['createStory'] = ({ input }) => {
  const currentUser = context.currentUser

  return db.story.create({
    data: {
      ...input,
      authorId: currentUser.id,
    },
  })
}

export const updateStory: MutationResolvers['updateStory'] = ({
  id,
  input,
}) => {
  return db.story.update({
    data: input,
    where: { id },
  })
}

export const deleteStory: MutationResolvers['deleteStory'] = ({ id }) => {
  return db.story.delete({
    where: { id },
  })
}

export const Story = {
  author: (_obj, { root }: ResolverArgs<Prisma.StoryWhereUniqueInput>) =>
    db.story.findUnique({ where: { id: root.id } }).author(),

  publication: (
    _obj,
    { root }: ResolverArgs<Prisma.PublicationWhereUniqueInput>
  ) => db.story.findUnique({ where: { id: root.id } }).publication(),
}
