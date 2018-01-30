import React from 'react'
import { Slide, Heading, Text, CodePane } from 'spectacle'
import { state } from '../examples/redux-traversal'

export default (
  <Slide>
    <Heading textSize={60} textFont="primary" textColor="secondary">
      Finding State
    </Heading>
    <Text textAlign="left" textFont="primary" textColor="quartenary">In parent app</Text>
    <CodePane textSize={18} lang="js" source={state} />
  </Slide>
)
