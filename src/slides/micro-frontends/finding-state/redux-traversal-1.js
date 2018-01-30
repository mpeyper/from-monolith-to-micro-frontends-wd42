import React from 'react'
import { Slide, Heading, Text, CodePane } from 'spectacle'
import { child } from '../examples/redux-traversal'

export default (
  <Slide>
    <Heading textSize={60} textFont="primary" textColor="secondary">
      Finding State
    </Heading>
    <Text textAlign="left" textFont="primary" textColor="quartenary">In micro-frontend</Text>
    <CodePane textSize={18} lang="js" source={child} />
  </Slide>
)
