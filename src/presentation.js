import 'prismjs'
import 'prismjs/components/prism-jsx'
import 'normalize.css'
import 'prismjs-tomorrow-theme/prism-tomorrow.css'

import React from 'react'
import { Deck } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'

import Title from './slides/00-title'
import LegacySite from './slides/01-legacy-site'
import MemberSite from './slides/02-member-site'

const theme = createTheme(
  {
    primary: '#2D2D2D',
    secondary: '#FFFFFF',
    tertiary: '#764EB8',
    quartenary: '#EE8D51'
  },
  {
    primary: { name: 'Roboto', googleFont: true, styles: ['400', '700i'] },
    secondary: { name: 'Roboto Mono', googleFont: true, styles: ['400', '700i'] }
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        {Title}
        {LegacySite}
        {MemberSite}
      </Deck>
    )
  }
}
