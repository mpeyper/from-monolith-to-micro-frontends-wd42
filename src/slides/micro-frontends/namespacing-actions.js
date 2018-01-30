import React from 'react'
import { Slide, Heading, Text, CodePane } from 'spectacle'
import { child } from './examples/namespacingActions'

export default (
  <Slide>
    <Heading textSize={60} textFont="primary" textColor="secondary" margin="0 0 50px 0">
      Namespacing Actions
    </Heading>
    <Text textAlign="left" textFont="primary" textColor="quartenary">In micro-frontend</Text>
    <CodePane textSize={28} lang="js" source={child} />
  </Slide>
)
