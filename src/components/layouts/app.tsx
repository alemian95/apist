import { AppSidebar } from '../app-sidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import { HeaderActions } from '../header-actions'

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 p-2 border-b bg-background">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
            </div>
            <div className="flex items-center gap-4">
              <HeaderActions />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
        <footer className="sticky bottom-0 z-10 p-2 text-xs border-t bg-background">
          <p>Footer</p>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AppLayout
