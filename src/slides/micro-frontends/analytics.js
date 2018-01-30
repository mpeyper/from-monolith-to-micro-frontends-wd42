import React from 'react'
import { Slide, Heading, Text, CodePane } from 'spectacle'
import { parent, child } from './examples/analytics'

export default (
  <Slide>
    <Heading textSize={60} textFont="primary" textColor="secondary">
      Analytics
    </Heading>
    <Text textAlign="left" textFont="primary" textColor="quartenary">In parent app</Text>
    <CodePane textSize={18} lang="js" source={parent} />
    <Text textAlign="left" textFont="primary" textColor="quartenary">In micro-frontend</Text>
    <CodePane textSize={18} lang="js" source={child} />
  </Slide>
)
