import { PropsWithChildren } from 'react'

function AppLayout({ children }: PropsWithChildren) {
  return <div className="border">{children}</div>
}

export default AppLayout
