import { provideEditingConfig } from 'scrivito'
import { IconWidget } from './IconWidgetClass'
import { classNameToThumbnail } from '../../utils/classNameToThumbnail'

provideEditingConfig(IconWidget, {
  title: 'Icon',
  thumbnail: classNameToThumbnail('IconWidget'),
  attributes: {
    alignment: {
      title: 'Alignment',
      description: 'A icon list widget ignores this setting. Default: Left',
      values: [
        { value: 'left', title: 'Left' },
        { value: 'center', title: 'Center' },
        { value: 'right', title: 'Right' },
      ],
    },
    icon: {
      title: 'Icon',
      description:
        'Default: "bi-box". The full list of names can be found at https://icons.getbootstrap.com/',
    },
    link: {
      title: 'Link (optional)',
      description: 'The link where this icon should lead.',
    },
    size: {
      title: 'Size',
    },
  },
  properties: ['icon', 'size', 'alignment', 'link'],
  initialContent: {
    icon: 'bi-box',
    size: 'bi-1x',
    alignment: 'left',
  },
})
