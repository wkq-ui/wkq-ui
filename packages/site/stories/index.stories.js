import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import classnames from 'classnames';
import '../../../../web-base/ui-state/scss/real-world/pc-ui/index.scss'
import {Button} from '@wkq/wkq-ui'
var data = [
  { name: 'item', type: 'primary' },
  { name: 'item', type: 'secondary' },
  { name: 'item', type: 'success' },
  { name: 'item', type: 'danger' },
  { name: 'item', type: 'warning' },
  { name: 'item', type: 'info' },
  { name: 'item', type: 'dark' },
]
storiesOf('wkq-ui', module)
  .add('Button', () => {
    return (
      <div>
        {
          data.map(d => {
            return <Button type={d.type}></Button>
          })
        }
      </div>
    )
  })

