import React from 'react'
import { Slide, Heading, CodePane, Notes } from 'spectacle'
import { parent } from './examples/redux-dynostore'

export default (
  <Slide>
    <Heading textSize={60} textFont="primary" textColor="secondary" margin="0 0 50px 0">
      redux-dynostore
    </Heading>
    <CodePane textSize={18} lang="js" source={parent} />
    <Notes>
      Allows micro-frontends to dynamically wire up to the store<br />
      Will be open sourced soon<br />
      Compatable with react, redux, thunk, saga<br />
    </Notes>
  </Slide>
)
