import { createServerFn } from '@tanstack/react-start'
import { db } from '@/db'
import { projects } from '@/db/schema'
import {eq} from "drizzle-orm";

export const getProjects = createServerFn().handler(async () => {
  return db.select().from(projects).all()
})

export const createProject = createServerFn()
  .inputValidator((data: { name: string; color: string }) => data)
  .handler(async ({ data }) => {
    return db.insert(projects).values(data).returning().get()
  })

export const deleteProject = createServerFn()
    .inputValidator((data: { projectId: number }) => data)
    .handler(async ({ data }) => {
        return db.delete(projects).where(eq(projects.id, data.projectId)).returning().get()
    })
