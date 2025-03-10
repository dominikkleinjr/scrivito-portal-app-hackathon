import { provideWidgetClass } from 'scrivito'

export const DataFormDeleteButtonWidget = provideWidgetClass(
  'DataFormDeleteButton',
  {
    attributes: {
      buttonStyle: ['enum', { values: ['btn-danger', 'btn-outline-primary'] }],
      cancelTitle: 'string',
      confirmTitle: 'string',
      deletedMessage: 'string',
      redirectAfterDelete: 'boolean',
      redirectToAfterDelete: 'reference',
      requireConfirmation: 'boolean',
      title: 'string',
    },
  },
)
