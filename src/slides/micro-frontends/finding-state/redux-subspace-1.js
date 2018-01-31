import React from 'react'
import { Slide, Heading, Text, CodePane, Notes } from 'spectacle'
import { parent } from '../examples/redux-subspace'

export default (
  <Slide>
    <Heading textSize={60} textFont="primary" textColor="secondary" margin="0 0 50px 0">
      redux-subspace
    </Heading>
    <Text textAlign="left" textFont="primary" textColor="quartenary">In parent app</Text>
    <CodePane textSize={18} lang="js" source={parent} />
    <Notes>
      IOOF's first open-source project<br />
      Compatable with react, redux, thunk, saga, observable and loop<br />
      140+ Github Stars<br />
      1500+ NPM Downloads a month (#fakenumbers)<br />
      Looking for contributors, not just code<br />
    </Notes>
  </Slide>
)
