import { IconChevronDown, IconFolder, IconPlus } from '@tabler/icons-react'
import { Button } from './ui/button'
import { ButtonGroup } from './ui/button-group'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { CreateProjectForm } from './forms/create-project'

export function HeaderActions() {
  const [createProjectDialog, setCreateProjectDialog] = useState(false)
  const [createRequestDialog, setCreateRequestDialog] = useState(false)

  return (
    <>
      <ButtonGroup>
        <Button variant="outline">Create</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="pl-2!">
              <IconChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => setCreateProjectDialog(true)}>
                <IconFolder />
                Create Project
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <IconPlus />
                Create request
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
      <Dialog open={createProjectDialog} onOpenChange={setCreateProjectDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New project</DialogTitle>
            <DialogDescription>Create a new project</DialogDescription>
          </DialogHeader>
          <CreateProjectForm onSuccess={() => setCreateProjectDialog(false)} />
        </DialogContent>
      </Dialog>
    </>
  )
}
