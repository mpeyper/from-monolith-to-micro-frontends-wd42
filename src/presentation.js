import 'prismjs'
import 'prismjs/components/prism-jsx'
import 'normalize.css'
import 'prismjs-tomorrow-theme/prism-tomorrow.css'

import React from 'react'
import { Deck } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'

import Introduction from './slides/introduction'
import LegacySite from './slides/legacy-site'
import MemberSite from './slides/member-site'

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
      <Deck transition={['fade']} theme={theme}>
        {Introduction}
        {LegacySite}
        {MemberSite}
      </Deck>
    )
  }
}
