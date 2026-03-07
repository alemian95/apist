import { create } from 'zustand'
import { getProjects } from '@/server/functions/projects'

export const useProjectsStore = create((set) => ({
  projects: [],
  setProjects: (projects) => set({ projects }),
  selectedProject: null,
  setSelectedProject: (project) => set({ selectedProject: project }),
  fetchProjects: async () => {
    const projects = await getProjects()
    set({ projects })
  },
}))
