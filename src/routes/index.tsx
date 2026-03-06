import AppLayout from '@/components/layouts/app'
import { Spinner } from '@/components/ui/spinner'
import { getMessage, getServerTime } from '@/server/functions/test'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [message, setMessage] = useState<string | null>(null)
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    getMessage().then((res) => setMessage(res.message))
    getServerTime().then((res) => setTime(res.time))
  }, [])

  return (
    <AppLayout>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center">
          <p className="text-sm">{time}</p>
          {time ? null : <Spinner />}
        </div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center">
          <p className="text-sm">{message}</p>
          {message ? null : <Spinner />}
        </div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center"></div>
      </div>
    </AppLayout>
  )
}
