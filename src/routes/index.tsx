import AppLayout from '@/components/layouts/app'
import { createFileRoute } from '@tanstack/react-router'
// import { ComponentExample } from "@/components/component-example";

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    // <ComponentExample />
    <AppLayout>
      <div></div>
    </AppLayout>
  )
}
