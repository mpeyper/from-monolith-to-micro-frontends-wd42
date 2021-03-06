import React from 'react'
import { Slide, Heading, Text, CodePane } from 'spectacle'
import { store } from '../examples/redux-subspace'

export default (
  <Slide>
    <Heading textSize={60} textFont="primary" textColor="secondary" margin="0 0 50px 0">
      redux-subspace
    </Heading>
    <Text textAlign="left" textFont="primary" textColor="quartenary">In parent app</Text>
    <CodePane textSize={18} lang="js" source={store} />
  </Slide>
)
