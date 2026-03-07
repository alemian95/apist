import AppLayout from '@/components/layouts/app'
import { Spinner } from '@/components/ui/spinner'
import { getMessage, getServerTime } from '@/server/functions/default'
import { useProjectsStore } from '@/stores/projects'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [message, setMessage] = useState<string | null>(null)
  const [time, setTime] = useState<string | null>(null)

  const projectsStore = useProjectsStore()

  useEffect(() => {
    getMessage().then((res) => setMessage(res.message))
    getServerTime().then((res) => setTime(res.time))
  }, [])

  return (
    <AppLayout>
      <div className="grid auto-rows-min gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center">
          <p className="text-sm">{time}</p>
          {time ? null : <Spinner />}
        </div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center">
          <p className="text-sm">{message}</p>
          {message ? null : <Spinner />}
        </div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        {projectsStore.projects.map((project) => {
          return (
            <div
              key={project.id}
              className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center border-2"
              style={{
                background: project.color + '33',
                borderColor: project.color,
                color: project.color,
              }}
            >
              {project.name}
            </div>
          )
        })}
      </div>
    </AppLayout>
  )
}
