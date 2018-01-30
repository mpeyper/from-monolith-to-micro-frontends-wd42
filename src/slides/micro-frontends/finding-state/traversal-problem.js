import React from 'react'
import { Slide, Heading, Appear, Text, CodePane } from 'spectacle'
import { problem } from '../examples/redux-traversal'

export default (
  <Slide>
    <Heading fit textFont="primary" textColor="secondary" margin="0 0 50px 0">
      The Problem with Traversal...
    </Heading>
    <Appear>
      <div>
        <Text textAlign="left" textFont="primary" textColor="quartenary" margin="0 0 50px 0">
          It can't handle nested micro-frontends
        </Text>
        <CodePane textSize={18} lang="js" source={problem} />
      </div>
    </Appear>
  </Slide>
)
