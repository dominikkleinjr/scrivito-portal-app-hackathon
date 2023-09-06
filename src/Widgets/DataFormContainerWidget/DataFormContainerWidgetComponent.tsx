import {
  ContentTag,
  navigateTo,
  provideComponent,
  useDataItem,
  // @ts-expect-error TODO: remove once officially released
  useDataScope,
} from 'scrivito'
import { DataFormContainerWidget } from './DataFormContainerWidgetClass'
import { toast } from 'react-toastify'
import { useRef, useState } from 'react'

provideComponent(DataFormContainerWidget, ({ widget }) => {
  const dataItem = useDataItem()
  const dataScope = useDataScope()
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [keyCounter, setKeyCounter] = useState(0)
  const key = `DataFormContainerWidget-${widget.id()}-${keyCounter}`
  const redirectAfterCreate =
    widget.get('redirectAfterCreate') || widget.obj().parent()

  return (
    <form
      ref={formRef}
      key={key}
      onSubmit={onSubmit}
      onReset={onReset}
      className={isSubmitting ? 'form-loading' : ''}
    >
      <ContentTag content={widget} attribute="content" />
      {isSubmitting && <div className="loader" />}
    </form>
  )

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    e.stopPropagation()

    setIsSubmitting(true)

    const attributes = Object.fromEntries(
      new FormData(formRef.current).entries(),
    )

    try {
      if (dataItem) {
        await dataItem.update(attributes)
      } else {
        await dataScope.create(attributes)

        if (redirectAfterCreate) navigateTo(redirectAfterCreate)
      }
    } catch (error) {
      if (!(error instanceof Error)) return

      toast.error(
        <div>
          <h6>{error.message}</h6>
          <p>We&apos;re sorry for the inconvenience.</p>
        </div>,
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  function onReset(e: React.FormEvent) {
    e.preventDefault()
    e.stopPropagation()

    setKeyCounter((k) => k + 1)
  }
})
