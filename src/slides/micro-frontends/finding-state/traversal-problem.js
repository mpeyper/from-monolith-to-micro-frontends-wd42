import React from 'react'
import { Slide, Heading, Appear, Text, CodePane, Notes } from 'spectacle'
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
    <Notes>
      Parent app doesn't know about it to set up a traversal key<br />
      Can't hard coding it makes refacting intermediate levels difficult<br />
      Nested child can't traverse through parent as it might be different<br />
    </Notes>
  </Slide>
)
