import React from 'react'
import { Slide, Heading, CodePane, Notes } from 'spectacle'
import { child } from './examples/redux-dynostore'

export default (
  <Slide>
    <Heading textSize={60} textFont="primary" textColor="secondary" margin="0 0 50px 0">
      redux-dynostore
    </Heading>
    <CodePane textSize={18} lang="js" source={child} />
    <Notes>
      Parent only needs to mount React Component<br />
      Everything is automatic<br />
    </Notes>
  </Slide>
)
