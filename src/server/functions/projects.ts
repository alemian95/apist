import { createServerFn } from '@tanstack/react-start'
import { db } from '@/db'
import { projects } from '@/db/schema'

export const getProjects = createServerFn().handler(async () => {
  return db.select().from(projects).all()
})

export const createProject = createServerFn()
  .validator((data: { name: string; color: string }) => data)
  .handler(async ({ data }) => {
    return db.insert(projects).values(data).returning().get()
  })
