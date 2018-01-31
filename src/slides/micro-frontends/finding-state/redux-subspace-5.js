import React from 'react'
import { Slide, Heading, Text, CodePane, Notes } from 'spectacle'
import { reducer } from '../examples/redux-subspace'

export default (
  <Slide>
    <Heading textSize={60} textFont="primary" textColor="secondary" margin="0 0 50px 0">
      redux-subspace
    </Heading>
    <Text textAlign="left" textFont="primary" textColor="quartenary">In micro-frontend</Text>
    <CodePane textSize={18} lang="js" source={reducer} />
    <Notes>
      No need to namespace actions anymore
      Reducer doesn't need to change
    </Notes>
  </Slide>
)
