import React from 'react'
import { Slide, Heading, CodePane } from 'spectacle'
import { artifactLoader } from './examples/lazy-loading'

export default (
  <Slide>
    <Heading textSize={60} textFont="primary" textColor="secondary" margin="0 0 50px 0">
      Lazy Loading
    </Heading>
    <CodePane textSize={18} lang="js" source={artifactLoader} />
  </Slide>
)
