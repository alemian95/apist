import * as z from 'zod'
import { useForm } from '@tanstack/react-form'
import { Field, FieldError, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { createProject } from '@/server/functions/projects'
import { useProjectsStore } from '@/stores/projects'

const formSchema = z.object({
  name: z.string().min(4).max(64),
  color: z.string().min(7).max(7),
})

export function CreateProjectForm({ onSuccess }: { onSuccess: () => void }) {
  const projectsStore = useProjectsStore()

  const form = useForm({
    defaultValues: {
      name: '',
      color: '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value)
      await createProject({
        data: {
          name: value.name,
          color: value.color,
        },
      })
      onSuccess()
      projectsStore.fetchProjects()
    },
  })

  return (
    <form
      onSubmit={(e) => {
        ;(e.preventDefault(), form.handleSubmit())
      }}
    >
      <form.Field
        name="name"
        children={(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid
          return (
            <Field data-invalid={isInvalid}>
              <FieldLabel htmlFor={field.name}>Project name</FieldLabel>
              <Input
                id={field.name}
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                aria-invalid={isInvalid}
                placeholder="Your new project name"
                autoComplete="off"
              />
              {isInvalid && <FieldError errors={field.state.meta.errors} />}
            </Field>
          )
        }}
      />
      <form.Field
        name="color"
        children={(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid
          return (
            <Field data-invalid={isInvalid}>
              <FieldLabel htmlFor={field.name}>Color</FieldLabel>
              <Input
                id={field.name}
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                aria-invalid={isInvalid}
                placeholder="The project color"
                autoComplete="off"
                type="color"
              />
              {isInvalid && <FieldError errors={field.state.meta.errors} />}
            </Field>
          )
        }}
      />
      <Field orientation="horizontal" className="mt-4">
        <Button type="button" variant="outline" onClick={() => form.reset()}>
          Reset
        </Button>
        <Button type="submit">Create</Button>
      </Field>
    </form>
  )
}
