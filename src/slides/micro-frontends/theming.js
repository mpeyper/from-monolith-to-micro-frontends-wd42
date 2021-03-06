import React from 'react'
import { Slide, Heading, Text, CodePane } from 'spectacle'
import { parent, child } from './examples/theming'

export default (
  <Slide>
    <Heading textSize={60} textFont="primary" textColor="secondary">
      Theming
    </Heading>
    <Text textAlign="left" textFont="primary" textColor="quartenary">In parent app</Text>
    <CodePane textSize={18} lang="js" source={parent} />
    <Text textAlign="left" textFont="primary" textColor="quartenary">In micro-frontend</Text>
    <CodePane textSize={18} lang="js" source={child} />
  </Slide>
)
